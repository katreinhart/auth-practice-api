const { promisify } = require('util')
const { sign, verify } = require('jsonwebtoken')
const verifyAsync = promisify(verify)
const secret = process.env.SECRET_KEY

class Token {
  static signToken ({ id, email }) {
    const sub = { id, email }
    const expiresIn = '1 week'
    const token = sign({ sub, expiresIn }, secret)
    return token
  }

  static parseTokenFromBearerAsync (bearer) {
    const token = bearer ? bearer.replace('Bearer ', '') : null
    return verifyAsync(token, secret)
  }
}

module.exports = Token
