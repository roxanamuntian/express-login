const User = require('../models/user')
const helpers = require('../helpers')

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password) {
        return res.status(400).send({
            success: false,
            message: "username and password required"
        })
    }

    const user = User.getUser(username, password)

    if (!user) {
        return res.status(404).send({
            success: false,
            message: "user not found"
        })
    }
    const token = helpers.generateToken(user);

    res.status(200).send({
        success: true,
        message: "auth successful",
        token: token
    })
    
}

const getDashboard = (req, res) => {
    res.send('true')
}

module.exports = {
    login,
    getDashboard
}