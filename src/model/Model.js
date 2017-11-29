const db = require('../db')

module.exports = (tableName) => {
  class Model {
    static index () {
      return db(tableName)
    }

    static show(id) {
      return db(tableName).where({ id }).first()
    }

    static create(body) {
      return db(tableName).insert(body).returning('*')
    }

  }

  return Model
}