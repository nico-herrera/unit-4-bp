const express = require('express');
const server = express();
const usersRouter = require('./users/users-router');
const cors = require('cors');
const errorHandler = require('./errorHandler');

server.use(cors());
server.use(express.json());

server.use('/api/users', usersRouter);

server.use(errorHandler);

module.exports = server;