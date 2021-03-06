exports.up = function (knex, Promise) {
  return knex.schema.createTable('bizCards', tbl => {
    tbl.increments();

    tbl
      .string('businessName', 255)
      .notNullable()

    tbl
      .string('address')
      .notNullable()

    tbl
      .string('phone')
      .notNullable()

    tbl.string('logoPic')

    tbl.string('additionalPic')

    tbl.string('phone2')

    tbl.string('blurb')

    tbl.string('hours')

    tbl.string('email')

    tbl.string('website')

    tbl.string('notes')

    tbl.text('qrcode')

    tbl
      .integer('createdBy')
      .unsigned()
      .references('id')
      .inTable('bizUsers')

    tbl
      .integer('eventId')
      .unsigned()
      .references('id')
      .inTable('bizEvents')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('bizCards');
};
