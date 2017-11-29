const User = require('../model/User')
const Controller = require('./Controller')('users')

class UsersController extends Controller {
  static login (req, res, next) {
    const { email, password } = req.body

  }

  static signup (req, res, next) {

  }
}

module.exports = UsersController
