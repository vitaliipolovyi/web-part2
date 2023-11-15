const jwt = require('jsonwebtoken')
const jwtConfig = require('./../config').jwt

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {Function} next 
 */
module.exports = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['authorization'] || req.headers['x-access-token']
    if (!token) {
        return res.status(403).json({
            status: 403,
            errors: [{ msg: 'Auth token is missing' }]
        })
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), jwtConfig.key)
        req.user = decoded

        next()
    } catch (e) {
        return res.status(401).json({
            status: 401,
            errors: [{ msg: 'Invalid token' }]
        })
    }
}