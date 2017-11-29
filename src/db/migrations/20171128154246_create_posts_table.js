
exports.up = knex => {
  return knex.schema.createTable('posts', table => {
    table.increments()
    table.string('post_title').notNullable().defaultsTo('')
    table.text('post_content').notNullable().defaultsTo('')
    table.integer('post_author').notNullable().defaultsTo(0)
    table.foreign('post_author').references('users.id')
  })
}

exports.down = knex => knex.schema.dropTable('posts')
