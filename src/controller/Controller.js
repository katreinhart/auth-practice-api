const capitalize = require('lodash/capitalize')
const pluralize = require('pluralize')

module.exports = name => {
  const singular = pluralize.singular(name)
  const modelName = capitalize(singular)
  const Model = require(`../model/${modelName}`)

  class Controller {
    constructor () {}

    static index (req, res, next) {
      console.log(`show all ${singular}`)
      return Model.index()
        .then(response => res.status(200).json({ [pluralize(name)]: response }))
        .catch(next)
    }
  }

  return Controller
}
