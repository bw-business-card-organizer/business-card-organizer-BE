const db = require('../dbConfig');

module.exports = {
  findMyCards,
}

function findMyCards() {
  return db('bizCards')
    .innerJoin(
      'bizCollections', 
      'bizCollections.cardId', 
      'bizCards.id'
    )
    .innerJoin(
      'bizUsers',
      'bizCollections.userId',
      'bizUsers.id'
    )
    .where('bizCards.myCard', '1')
}