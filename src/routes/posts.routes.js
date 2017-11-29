const router = require('express').Router()
const PostsController = require('../controller/posts')

router.get('/', PostsController.index)

module.exports = router
