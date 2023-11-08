'use strict'

module.exports = {
  /**
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  index (req, res) {
    res.status(200).json({ status: "OK" })
  }
}
