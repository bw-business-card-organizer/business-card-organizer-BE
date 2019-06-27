exports.up = function(knex, Promise) {
  return knex.schema.createTable('bizEventCollections', tbl => {
    tbl.increments()

    tbl
      .integer('eventId')
      .unsigned()
      .references('id')
      .inTable('bizEvents')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl
      .integer('cardId')
      .unsigned()
      .references('id')
      .inTable('bizCards')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bizEventCollections');
};
