useEffect(() => {
  const documentGeneration = appData.documentGeneration;

  if (documentGeneration) {
    setLoading(true);
    setErrorMessage('');

    const sse = new EventSource(
      `/api/docs/task/${appData.documentGenerationTask}/listen`,
      {
        withCredentials: true,
      }
    );

    sse.addEventListener('message', async (e) => {
      const data = JSON.parse(e.data);

      if (data.status === 404) {
        setErrorMessage(appTranslations.errors);
      } else if (data.status === 500) {
        setErrorMessage(appTranslations.errors.documentGenerationFailed);
      } else {
        setContentId(data.contentId);
        const date = new Date().toISOString().substring(0, 10);
        setFileName(`Proposal_${formsData.client.no}_${date}.docx`);
        setSuccess(true);
      }

      setLoading(false);

      setAppData({
        ...appData,
        documentGeneration: false,
      });

      // Each message is actually terminal here, no need to check statuses
      sse.close();
    });
  }
}, [appData.documentGeneration]);
