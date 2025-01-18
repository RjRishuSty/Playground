const router = require('express').Router();
const {getBlogs,createBlogs} = require('../controllers/blogs.controllers');

router.get('/', getBlogs);
router.post('/new', createBlogs);

module.exports = router;