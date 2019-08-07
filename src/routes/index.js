const express  = require('express')
const routes = express.Router()
const user = require('../controllers/user')
const middlewares = require('../middlewares')

routes.post('/login', user.login)
routes.get('/dashboard', middlewares.checkToken, user.getDashboard)

module.exports = routes;