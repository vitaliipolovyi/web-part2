'use strict'

function Worker () {
  this.doAJob = function () {
    console.log('process')
  }
}

// const worker = new Worker
// worker.doAJob();

function SuperWorker () {
  Worker.call(this)
  const oldDoAJob = this.doAJob
  this.doAJob = function () {
    oldDoAJob()
    console.log('process more')
  }
}

(new SuperWorker()).doAJob()
