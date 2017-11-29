const db = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Model = require('./Model')('users')

class User extends Model {
  static signup (email, password) {
    return db('users').where({ email }).first()
      .then(user => {
        if(user) throw new Error()

        const salt = bcrypt.genSaltSync(8)
        const passhash = bcrypt.hashSync(password, salt)

        return User.create({ email, passhash })
      })
      .catch(() => { throw new Error('User signup failed') })
  }

  static login (email, password) {
    return db('users').where({ email })
      .then(user => {
        if(bcrypt.compareSync(password, user.passhash)) {
          // create a token & send back to user
          return 
        } else {
          return false
        }
      })
      .catch(() => { throw new Error('Login failed') })
  }
}

module.exports = User
