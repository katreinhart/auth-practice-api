const router = require('express').Router()
const AuthController = require('../controller/users')

router.post('/login', AuthController.login)
router.post('/signup', AuthController.signup)

module.exports = router
