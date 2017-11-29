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

    static show (req, res, next) {
      console.log(`show ${singular} with ${req.params.id}`)
      return Model.show(req.params.id)
        .then(response => res.status(200).json({ [pluralize.singular(name)]: response }))
        .catch(next)
    }

    static create (req, res, next) {
      console.log(`create ${singular} with ${req.body}`)
      return Model.create(body)
        .then(response => res.status(200).json({ [pluralize.singular(name)]: response }))
        .catch(next)
    }
  }

  return Controller
}
