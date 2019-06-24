const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../routes/users-router');

const server = express();

server.use(helmet());
server.use(cors());

usersRouter(server);

module.exports = server;