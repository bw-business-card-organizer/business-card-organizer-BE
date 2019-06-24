exports.up = function(knex) {
  return knex.schema.createTable('bizUsers', tbl => {
    tbl.increments();

    tbl
      .string('email', 255)
      .notNullable()
      .unique();

    tbl
      .string('password', 255)
      .notNullable();

    tbl
      .string('firstName', 255)
      .notNullable();

    tbl
      .string('lastName', 255)
      .notNullable();

    tbl
      .integer('subscription')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('bizUsers');
};
