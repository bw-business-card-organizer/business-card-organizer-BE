const db = require('../dbConfig');

module.exports = {
  findMyCards,
  findEvents,
  addEvent,
  findEventById,
  findEventCards
}

function findMyCards(userId) {
  return db('bizCards')
    
    .where('createdBy', userId)
}

function findEvents() {
  return db('bizEvents')
}

async function addEvent(event) {
  const [id] = await db('bizEvents')
    .insert(event, 'id');
  return findEventById(id);
}

function findEventById(id) {
  return db('bizEvents')
    .where({
      id
    })
    .first();
}

function findEventCards(eventId) {
  return db('bizCards')
    .where('eventId', eventId)
}
