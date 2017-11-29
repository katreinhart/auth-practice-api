const db = require('../db')
const Model = require('./Model')('posts')

class Post extends Model {}

module.exports = Post
