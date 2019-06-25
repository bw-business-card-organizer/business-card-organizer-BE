const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const cardsRouter = require('../routes/cards-router');
const usersRouter = require('../routes/users-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json())

server.use('/api/cards', cardsRouter)
usersRouter(server);

module.exports = server;