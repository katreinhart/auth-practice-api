
exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('email').notNullable().defaultsTo('')
    table.string('passhash').notNullable()
  })
}

exports.down = knex => knex.schema.dropTable('users')
