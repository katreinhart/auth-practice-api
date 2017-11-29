const router = require('express').Router()
const AuthController = require('../controller/auth')

router.post('/login', AuthController.login)
router.post('/signup', AuthController.signup)

module.exports = router
