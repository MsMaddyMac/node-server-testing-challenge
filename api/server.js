const express = require('express');

const hobbitsRouter = require('../hobbits/hobbits-router');

const server = express();

server.use(express.json());

server.use('/api/hobbits', hobbitsRouter);

server.get('/', (req, res) => {
	res
		.status(200)
		.json({ api: 'Rolling with the homies...', dbenv: process.env.DB_ENV });
});

module.exports = server;
