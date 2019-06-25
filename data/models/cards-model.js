const db = require('../dbConfig');

module.exports = {
  find,
  findBy,
  findById,
  add,
  update,
  remove
};

function find() {
  return db('bizCards');
}

function findBy(filter) {
  return db('bizCards')
    .where(filter)
}

function findById(id) {
  return db('bizCards')
    // .select()
    .where({
      id
    })
    .first();
}

function add(card) {
  return db('bizCards')
    .insert(card)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(id, changes) {
  return db('bizCards')
    .where({ 
      id 
    })
    .update(changes);
}

function remove(id) {
  return db('bizCards')
    .where('id', id)
    .del();
}
