const route = require('express').Router()
const authService = require('../services/authService')

route.post('/signup', authService.signUp)
route.post('/signin', authService.signIn)


module.exports = route


