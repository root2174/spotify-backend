//Imports
const express = require('express');

//Controllers Imports
const UserController = require('./controllers/UserController');

const routes = express.Router();

//Users Routes
routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

module.exports = routes;
