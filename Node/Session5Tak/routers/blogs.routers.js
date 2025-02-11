const router = require('express').Router();
const {getBlogs,createNewBlog} = require('../controllers/blogs.controllers');

router.get('/', getBlogs);
router.post('/new', createNewBlog);

module.exports = router;