const db = require('../dbConfig');

module.exports = {
  findMyCards,
}

function findMyCards(userId) {
  return db('bizCards')
    // .innerJoin(
    //   'bizCollections', 
    //   'bizCollections.cardId', 
    //   'bizCards.id'
    // )
    // .innerJoin(
    //   'bizUsers',
    //   'bizCollections.userID',
    //   'bizUsers.id'
    // )
    // .innerJoin(
    //   'bizUsers',
    //   'bizCards.createdBy',
    //   'bizUsers.id'
    // )
    .where('createdBy', userId)
    // where userId

    // createdBy / holder
}