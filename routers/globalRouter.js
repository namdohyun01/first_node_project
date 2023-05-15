const express = require('express');
const boardController = require('../controllers/boardController');
const userController = require('../controllers/userController');
const globalRouter = express.Router();

globalRouter.get('/', boardController.home);

globalRouter.get('/join', userController.join);

globalRouter.get('/login', userController.login);

globalRouter.get('/search', boardController.search);

module.exports = globalRouter;