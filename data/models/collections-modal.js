const db = require('../dbConfig');

module.exports = {
  findMyCards,
}

function findMyCards() {
  return db('bizCards')
    .select(*)
    .innerJoin(
      'collections', 
      'collections.cardId', 
      'bizCards.id'
    )
    .innerJoin(
      'collections',
      'collections.userId',
      'bizUsers.id'
    )
    .where('bizCards.myCard', true)
}