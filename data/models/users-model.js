const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById
}

function find() {
  return db('bizUsers')
    .select('id', 'email');
}

function findBy(filter) {
  return db('bizUsers')
    .where(filter)
}

async function add(user) {
  const [id] = await db('bizUsers')
    .insert(user, 'id');
  return findById;
}

function findById(id) {
  return db('bizUsers')
    .select('id', 'email')
    .where({
      id
    })
    .first();
}