'use strict'

function Worker () {
  this.doAJob = function () {
    console.log('process')
  }
}

function SuperWorker () {
  Worker.call(this)
  this.doMoreJob = function () {
    this.doAJob()
    console.log('process more')
  }
}

(new SuperWorker()).doMoreJob()
