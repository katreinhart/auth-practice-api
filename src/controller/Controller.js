const capitalize = require('lodash/capitalize')
const pluralize = require('pluralize')

module.exports = name => {
  const singular = pluralize.singular(name)
  const modelName = capitalize(singular)
  const Model = require(`../model/${modelName}`)

  class Controller {
    constructor () {}

    static index (req, res, next) {
      return Model.index()
        .then(response => res.status(200).json({ [pluralize(name)]: response }))
        .catch(next)
    }

    static show (req, res, next) {
      return Model.show(req.params.id)
        .then(response => res.status(200).json({ [pluralize.singular(name)]: response }))
        .catch(next)
    }

    static create (req, res, next) {
      return Model.create(req.body)
        .then(response => res.status(200).json({ [pluralize.singular(name)]: response[0] }))
        .catch(next)
    }

    static update (req, res, next) {
      return Model.update(req.params.id, req.body)
      .then(response => res.status(200).json({ [pluralize.singular(name)]: response[0] }))
      .catch(next)
    }
  }

  return Controller
}
