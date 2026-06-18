const { Router } = require("express");
const accountController = require('../controllers/accountController.js');

const accountRouter = Router();

accountRouter.post('/signup', accountController.userSignUp);


module.exports = accountRouter;