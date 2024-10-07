router.get('/task/:task/listen', async (req: Request, res: Response) => {
  const taskName = req.params.task;
  const userId = req.session.user?.id || null;

  const task = await Queue.findOne({
    where: { userId: userId, code: taskName },
  });

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });

  if (!task) {
    res.write(
      prepareSse({
        status: 404,
        data: null,
      })
    );

    res.end();

    return;
  }

  const interval = setInterval(async () => {
    const updatedTask = await Queue.findByPk(Number(task.getDataValue('id')));

    if (!updatedTask) {
      res.write(
        prepareSse({
          status: 404,
          task: null,
          contentId: null,
        })
      );

      clearInterval(interval);

      res.end();

      return;
    }

    const status = updatedTask.getDataValue('status');

    if (status === TaskStatus.Completed) {
      res.write(
        prepareSse({
          status: 200,
          task: updatedTask.getDataValue('id'),
          contentId: updatedTask.getDataValue('message'),
        })
      );

      clearInterval(interval);

      res.end();
    } else if (status === TaskStatus.Failed) {
      res.write(
        prepareSse({
          status: 500,
          task: updatedTask.getDataValue('id'),
          contentId: null,
        })
      );

      clearInterval(interval);

      res.end();
    }
  }, 500);
});
