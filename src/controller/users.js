const User = require('../model/User')
const Controller = require('./Controller')('users')
const Token = require('../model/Token')

class UsersController extends Controller {
  static login (req, res, next) {
    const { email, password } = req.body
    User.login(email, password)
      .then(token => res.json({ token }))
      .catch(next)
  }

  static signup (req, res, next) {
    const { email, password } = req.body
    User.signup(email, password)
      .then(user => res.json({ user }))
      .catch(next)
  }

  static isLoggedIn (req, res, next) {
    Token.parseTokenFromBearerAsync(req.headers.authorization)
      .then(result => {
        next()
      })
      .catch(err => next({ error: 403 }))
  }

  static setPostOwnership(req, res, next) {
    Token.parseTokenFromBearerAsync(req.headers.authorization)
      .then(result => {
        req.body.post_author = result.sub.id
        next()
      })
      .catch(err => next({ error: 403 }))
  }
}

module.exports = UsersController
