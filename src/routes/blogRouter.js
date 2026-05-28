const { Router } = require('express');

const blogController = require('../controllers/blogController.js');
const blogRouter = Router();

blogRouter.get('/', blogController.getUserBlogs);
blogRouter.post('/new', blogController.saveBlogInProgress);

module.exports = blogRouter