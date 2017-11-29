const router = require('express').Router()
const PostsController = require('../controller/posts')

router.get('/', PostsController.index)
router.get('/:id', PostsController.exists, PostsController.show)
router.post('/', PostsController.complete, PostsController.prune, PostsController.create)
router.put('/:id', PostsController.exists, PostsController.complete, PostsController.prune, PostsController.update)
router.delete('/:id', PostsController.exists, PostsController.delete)

module.exports = router
