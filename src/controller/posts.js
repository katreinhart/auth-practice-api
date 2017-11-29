const Controller = require('./Controller')('posts')
const fields = ['post_title', 'post_content', 'post_author']

class PostsController extends Controller {
  static complete(req, res, next) {
    const errors = []
    fields.forEach(field => {
      if(!req.body.hasOwnProperty(field)) errors.push(`${field} is required`)
    })
    if(errors.length) next({ status: 400, message: 'There were errors', errors })
    else next()
  }

  static prune(req, res, next) {
    const keys = Object.keys(req.body)
    Object.keys(req.body).forEach(item => {
      if(!fields.includes(item)) delete req.body[item]
    })
    next()
  }
}

module.exports = PostsController
