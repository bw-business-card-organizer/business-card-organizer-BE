const db = require('../dbConfig');
const qr = require('qrcode');


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

async function add(card) {
  const [createdCard] = await db('bizCards')
    .insert(card, 'id')
  const foundCard = await findById(createdCard)
  console.log(createdCard);
  let qrcode = await qr.toDataURL(`${process.env.FRONT_END}/api/cards/${foundCard.id}`);
  await update(foundCard.id, { qrcode })
  const newCard = await findById(foundCard.id);
  return newCard;
}

function update(id, changes) {
  return db('bizCards')
    .where({
      id
    })
    .update(changes, 'id');
}

function remove(id) {
  return db('bizCards')
    .where('id', id)
    .del();
}
