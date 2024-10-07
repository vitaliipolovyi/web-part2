class ClassWithAsync {
  async doAsyncJob() {
    const promise = () =>
      new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log('promise is resolved');
          resolve(['array', 'param']);
        }, 500);
      });

    const result = await promise();

    return result;
  }
}

new ClassWithAsync().doAsyncJob().then(console.log);
