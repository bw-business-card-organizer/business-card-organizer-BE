exports.up = function(knex, Promise) {
  return knex.schema.createTable('bizCollections', tbl => {
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
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('collections')
};
