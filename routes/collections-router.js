const express = require('express');

const { authenticate } = require('../auth/authenticate');
const Collections = require('../data/models/collections-model');

const router = express.Router();



module.exports = router;