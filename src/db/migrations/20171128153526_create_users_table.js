
exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('first_name').notNullable().defaultsTo('')
    table.string('last_name').notNullable().defaultsTo('')
    table.string('email').notNullable().defaultsTo('')
    table.string('passhash').notNullable()
  })
}

exports.down = knex => knex.schema.dropTable('users')
