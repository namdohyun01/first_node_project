const express = require('express');
const boardController = require('../controllers/boardController');
const boardRouter = express.Router();


boardRouter.get('/write', boardController.write);

boardRouter.get('/:id/edit', boardController.editBoard);

boardRouter.get('/:id/delete', boardController.deleteBoard);

boardRouter.get('/:id', boardController.seeBoard);



module.exports = boardRouter;