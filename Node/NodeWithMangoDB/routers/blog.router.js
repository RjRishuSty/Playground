const router = require("express").Router();

const {
  getBlogs,
  createBlog,
  getBlogsById,
  deleteBlogById,
  updateBlogById,
} = require("../controllers/blog.controller");
const findBlogsByIdAndAttch = require("../middleware/findAndAttchBlog");
router.get("/", getBlogs);
router.post("/new", createBlog);

// TODO:  New Version All the route is matching then ............
router
  .route("/:blogId")
  .all(findBlogsByIdAndAttch) // all is a function. its has middleware all means all the request.
  .get(getBlogsById)
  .delete(deleteBlogById)
  .patch(updateBlogById);

// Old Verison
// router.get('/:blogId', getBlogsById);
// router.delete('/:blogId', deleteBlogById)
// router.patch('/:blogId', updateBlogById);

module.exports = router;
