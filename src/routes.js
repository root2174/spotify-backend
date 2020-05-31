//Imports
const express = require('express');

//Controllers Imports
const UserController = require('./controllers/UserController');
const PlaylistsController = require('./controllers/PlaylistsController');
const SongsController = require('./controllers/SongsController');

const routes = express.Router();

//Users Routes
routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.get('/user', UserController.getUserByEmail);
routes.put('/user/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

//Playlists Routes
routes.post('/playlists', PlaylistsController.create);
routes.get('/playlists', PlaylistsController.index);
routes.get('/playlist', PlaylistsController.getPlaylistByName);
routes.put('/playlist/:id', PlaylistsController.update);
routes.delete('/playlists/:id', PlaylistsController.delete);

//Songs Routes
routes.post('/songs', SongsController.create);
routes.get('/songs', SongsController.index);
routes.get('/song', SongsController.getSongByName);
routes.put('/song/:id', SongsController.update);
routes.delete('/songs/:id', SongsController.delete);

module.exports = routes;
