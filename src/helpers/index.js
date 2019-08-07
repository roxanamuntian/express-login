let jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const secretKey = process.env.SECRET_KEY || "secret"

    return jwt.sign({
        id: user.id,
        username: user.username,
        role: 'admin'
    }, secretKey, { expiresIn: '24h'})
}

module.exports = {
    generateToken
}
