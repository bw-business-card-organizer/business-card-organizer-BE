const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const cardsRouter = require('../routes/cards-router');
const collectionsRouter = require('../routes/collections-router');
const usersRouter = require('../routes/users-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json())

server.use('/api/cards', cardsRouter);
server.use('/api/collections', collectionsRouter);
usersRouter(server);

module.exports = server;