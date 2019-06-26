const express = require('express');
const qr = require('qrcode');

const { authenticate } = require('../auth/authenticate');
const Cards = require('../data/models/cards-model');

const router = express.Router();


// GET REQUESTS

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

router.get('/:id', authenticate, async (req, res) => {
  try {
    const card = await Cards.findById(req.params.id);
    if (card) {



      res
        .status(200)
        .json(card)
    } else {
      res
        .status(404)
        .json({
          message: 'This card could not be found.'
        })
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error retreiving this card.'
      })
  }
})


// POST REQUEST

router.post('/', authenticate, async (req, res) => {
  try {
    const card = await Cards.add(req.body);
    res
      .status(201)
      .json(card);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        message: 'There was an error adding this card.'
      });
  }
});


// PUT REQUEST

router.put('/:id', authenticate, async (req, res) => {
  try {
    const card = await Cards.update(req.params.id, req.body);
    if (card) {
      res
        .status(200)
        .json({
          message: "Changes have been successfully made!"
        });
    } else {
      res
        .status(404)
        .json({
          message: "This card could not be found."
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


// DELETE REQUEST

router.delete('/:id', authenticate, async (req, res) => {
  try {
    const count = await Cards.remove(req.params.id);
    if (count > 0) {
      res
        .status(200)
        .json({
          message: "This card has been successfully deleted!"
        })
    } else {
      res
        .status(404)
        .json({
          message: "This card could not be found."
        })
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "There was an error deleting this card."
      });
  }
});

module.exports = router;