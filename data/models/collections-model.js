const db = require('../dbConfig');

module.exports = {
  findMyCards,
}

function findMyCards() {
  return db('bizCards')
    // .select('*')
    .innerJoin(
      'bizCollections', 
      'bizCollections.cardId', 
      'bizCards.id'
    )
    .innerJoin(
      'bizCollections',
      'bizCollections.userId',
      'bizUsers.id'
    )
    .where('bizCards.myCard', 1)
}