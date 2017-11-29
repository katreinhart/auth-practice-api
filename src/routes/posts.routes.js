const router = require('express').Router()
const PostsController = require('../controller/posts')
const AuthController = require('../controller/users')

router.get('/', PostsController.index)
router.get('/:id', PostsController.exists, PostsController.show)
router.post('/', AuthController.isLoggedIn, AuthController.setPostOwnership, PostsController.complete, PostsController.prune, PostsController.create)
router.put('/:id', AuthController.isLoggedIn, PostsController.isOwner, PostsController.exists, PostsController.complete, PostsController.prune, PostsController.update)
router.delete('/:id', PostsController.isOwner, PostsController.exists, PostsController.delete)

module.exports = router
