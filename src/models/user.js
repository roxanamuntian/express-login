const data = require('../data')
const bcrypt = require('bcrypt')

const getUser = (username, password) => {
    const users = data.users;

    return users.find(user => user.username === username && bcrypt.compareSync(password, user.password))
}

const getDashboard = () => {
    
}

module.exports = {
    getUser,
    getDashboard
};