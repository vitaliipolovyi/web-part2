'use strict'

module.exports = {
  /**
   * @param {Object} obj
   * @param {String} prop
   * @param {*} defaultVal
   */
  getPropOrDefault (obj, prop, defaultVal = '') {
    return obj && obj[prop] ? obj[prop] : defaultVal
  }
}
