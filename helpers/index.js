let jwt = require('jsonwebtoken');
let secret = require('../config');

const generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        username: user.username,
        role: 'admin'
    }, secret, { expiresIn: '24h'})
}

module.exports = {
    generateToken
}
