'use strict'

const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')
const authByUsernameService = require('../services/auth/byUsername')
const authRegisterService = require('./../services/auth/register')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  login: [
    body('username')
      .isLength({ min: 3 }).trim().withMessage('Username field must be specified and contain at least 3 symbols.'),
    body('password')
      .isLength({ min: 8 }).trim().withMessage('Password field must be specified and contain at least 8 symbols.'),
    sanitizeBody('username').escape(),
    sanitizeBody('password').escape(),
    /**
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     * @param {Function} next
     */
    async(req, res, next) => {
      const errors = validationResult(req)
      if (errors.isEmpty()) {
        next()
      } else {
        res.status(422).json({
          status: 422,
          errors: errors.array()
        })
      }
    },
    /**
     * @param {import('express').Request} req 
     * @param {import('express').Response} res
     * @param {Function} next
     */
    async(req, res, next) => {
      try {
        const user = await authByUsernameService(req.body.username)
        if (user) {
          const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
          if (!isPasswordValid) {
            return res.status(422).json({
              errors: ["Password is not valid"]
            })
          }

          // TODO: config.secret
          const token = jwt.sign({ id: user.id }, 'secret', {
            expiresIn: 86400, // 24 hours
          })

          res.status(200).json({
            token: token,
            id: user.id,
            username: user.username
          })
        } else {
          const errorNotFound = new Error('User not found')
          errorNotFound.status = 404
          next(errorNotFound)
        }
      } catch (e) {
        res.status(400).json({
          errors: [{ msg: e.message }]
        })
      }
    },
  ],
  register: [
    body('fullName')
      .isLength({ min: 1 }).trim().withMessage('Full name field must be specified.'),
    body('username')
      .isLength({ min: 3 }).trim().withMessage('Username field must be specified and contain at least 3 symbols.'),
    body('password')
      .isLength({ min: 8 }).trim().withMessage('Password field must be specified and contain at least 8 symbols.'),
    sanitizeBody('fullName').escape(),
    sanitizeBody('username').escape(),
    sanitizeBody('password').escape(),
    /**
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     */
    async(req, res) => {
      const errors = validationResult(req)
      if (errors.isEmpty()) {
        try {
          const user = await authRegisterService(req.body)

          res.status(200).json({
            status: 200,
            locationType: user
          })
        } catch(e) {
          res.status(400).json({
            status: 400,
            errors: [{ msg: e.message }]
          })
        }
      } else {
        res.status(422).json({
          status: 422,
          errors: errors.array()
        })
      }
    },
  ],
}
