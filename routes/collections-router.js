const express = require('express');

const { authenticate } = require('../auth/authenticate');
const Collections = require('../data/models/collections-model');

const router = express.Router();


// GET REQUESTS

router.get('/', authenticate, async (req, res) => {
  try {
    const myCards = await Collections.findMyCards(req.decoded.subject);
    res
      .status(200)
      .json(myCards);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error retrieving your cards.'
      });
  }
});

router.get('/events', authenticate, async (req, res) => {
  try {
    const events = await Collections.findEvents()
    res
      .status(200)
      .json(events)
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error retrieving these events.'
      })
  }
})

router.get('/events/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Collections.findEventCards(id);
    
    if (event) {
      res
        .status(200)
        .json(event)
    } else {
      res
        .status(404)
        .json({
          message: 'This event could not be found.'
        })
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error retreiving this event.'
      })
  }
})


// POST REQUESTS

router.post('/events', authenticate, async (req, res) => {
  try {
    const event = await Collections.addEvent(req.body);
    res.status(201)
    .json(event)
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error adding this event.'
      });
  }
})

module.exports = router;