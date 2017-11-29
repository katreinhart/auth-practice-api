const db = require('../db')

module.exports = (tableName) => {
  class Model {
    static index () {
      return db(tableName)
    }
  }

  return Model
}