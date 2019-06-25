const express = require('express');

const { authenticate } = require('../auth/authenticate');
const Cards = require('../data/models/cards-model');

const router = express.Router();

router.get('/', authenticate, async (req, res) => {
  try {
    const cards = await Cards.find();
    res
      .status(200)
      .json(cards);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error retreiving these cards.'
      });
  }
});

router.post('/', authenticate, async(req, res) => {
  try {
    const card = await Cards.add(req.body);
    res
      .status(201)
      .json(card);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error adding this card.'
      });
  }
});

router.put('/:id', authenticate, async (req, res) => {
  try {
    const card = await Cards.update(req.params.id, req.body);
    if (card) {
      res
        .status(200)
        .json(card);
    } else {
      res
        .status(404)
        .json({
          message: "This card could not be found"
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "There was an error updating this card."
      });
  }
});

module.exports = router;