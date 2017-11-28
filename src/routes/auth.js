const router = require('express').Router()

router.post('/login', AuthController.login)
router.post('/signup', AuthController.signup)

module.exports = router