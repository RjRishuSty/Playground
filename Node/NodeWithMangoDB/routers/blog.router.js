const router = require('express').Router();

const {getBlogs,createBlog} = require('../controllers/blog.controller');

router.get('/', getBlogs);
router.post('/new', createBlog);

module.exports = router;
