exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('collections', tbl => {
      tbl.increments();

      tbl
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('bizUsers')
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

    .createTable('events', tbl => {
      tbl.increments()

      tbl
        .string('name')
        .notNullable()

      tbl
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('bizUsers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    .createTable('eventCollections', tbl => {
      tbl.increments()

      tbl
        .integer('eventId')
        .unsigned()
        .references('id')
        .inTable('events')
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
  return knex.schema
    .dropTableIfExists('collections')
    .dropTableIfExists('events')
    .dropTableIfExists('eventCollections');
};
