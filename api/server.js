const express = require('express');
const server = express();
const usersRouter = require('./users/users-router');

server.use(express.json());

server.use('/api/users', usersRouter);

server.use((err, req, res, next) => {
      const errorStatus = error.status || 500;
      const errorMessage = error.message || "Server failed...";
      res.status(errorStatus).json({ message: errorMessage, stack: error.stack });
    })

module.exports = server;