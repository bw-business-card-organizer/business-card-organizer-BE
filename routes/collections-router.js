const express = require('express');

const { authenticate } = require('../auth/authenticate');
const Collections = require('../data/models/collections-model');

const router = express.Router();

router.get('/', authenticate, async (req, res) => {
  try {
    const myCards = await Collections.findMyCards();
    res
      .status(200)
      .json(myCards);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        message: 'There was an error retrieving your cards.'
      });
  }
});

module.exports = router;