const { Router } = require('express');

const userRouter = Router();
const userController = require('../controllers/userController.js')

userRouter.post('/:username', userController.getPublicUserInfo);
//auth only to account owner
userRouter.post('/account/:username', userController.getAllAccountInfo);
 
module.exports = userRouter;