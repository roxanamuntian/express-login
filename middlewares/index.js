const jwt = require('jsonwebtoken')
const secret = require('../config')

const checkToken = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'];

    if (token) {
        jwt.verify(token, secret.private, (err, decoded) => {
            if (err) {
                return res.status(404).send({
                    success: false,
                    message: "invalid Token"
                })
            } else {
                req.decoded = decoded;
                next();
            }
        })
    } else {
        return res.status(400).send({
            success: false,
            message: "auth token not provided"
        })
    }
}

module.exports = {
    checkToken
}