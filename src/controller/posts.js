const Controller = require('./Controller')('posts')
const Model = require('../model/Post')
const Token = require('../model/Token')
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
    Object.keys(req.body).forEach(item => {
      if(!fields.includes(item)) delete req.body[item]
    })
    next()
  }

  static isOwner (req, res, next) {
    const tokenPromise = Token
      .parseTokenFromBearerAsync(req.headers.authorization)
      .catch(err => next({ error: 403 }))
    const modelPromise = Model
      .show(req.params.id)
      .catch(err => next({ error: 500 }))

    Promise.all([tokenPromise, modelPromise])
      .then(([token, model]) => {
        if(token.sub.id === model.post_author) {
          req.body.post_author = model.post_author
        } else {
          return next({ error: 403 })
        }
        next()
      })
  }
}

module.exports = PostsController
