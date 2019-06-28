exports.up = function(knex, Promise) {
  return knex.schema.createTable('bizEvents', tbl => {
    tbl.increments()

    tbl
      .string('name')
      .notNullable()

    tbl
      .integer('userId')
      .unsigned()
      .references('id')
      .inTable('bizUsers')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bizEvents')
};
