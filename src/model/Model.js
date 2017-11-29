const db = require('../db')

module.exports = (tableName) => {
  class Model {
    static index () {
      return db(tableName)
    }

    static show(id) {
      console.log('show')
      return db(tableName).where({ id }).first()
    }

    static create(body) {
      return db(tableName).insert(body).returning('*')
    }

    static update(id, body) {
      return db(tableName).where({ id }).update(body).returning('*')
    }

  }

  return Model
}