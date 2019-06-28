exports.up = function(knex, Promise) {
  return knex.schema.createTable('bizCollections', tbl => {
      tbl.increments();

      tbl
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('bizUsers')


      tbl
        .integer('cardId')
        .unsigned()
        .references('id')
        .inTable('bizCards')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('collections')
};
