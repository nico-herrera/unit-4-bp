const express = require('express');
const server = express();
const usersRouter = require('./users/users-router');
const cors = require('cors');

server.use(cors());
server.use(express.json());

server.use('/api/users', usersRouter);

server.use((err, req, res, next) => {
      const errorStatus = err.status || 500;
      const errorMessage = err.message || "Server failed...";
      res.status(errorStatus).json({ message: errorMessage, stack: err.stack });
    })

module.exports = server;