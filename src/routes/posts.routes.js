const router = require('express').Router()
const PostsController = require('../controller/posts')

router.get('/', PostsController.index)
router.get('/:id', PostsController.show)
router.post('/', PostsController.create)
// router.put('/:id', PostsController.update)
// router.delete('/:id', PostsController.delete)

module.exports = router
