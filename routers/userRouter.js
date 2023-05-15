const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();


userRouter.get('/edit', userController.editUser);

userRouter.get('/delete', userController.deleteUser);

userRouter.get('/:id', userController.seeUser);


module.exports = userRouter;