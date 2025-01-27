const Blog = require('../models/blog.model');
// TODO: --------------------Find all Data -----------------------------
const getBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    res.send(allBlogs);
  } catch (error) {
    res.send({ message: "Somethings went wrong!" });
  }
};
// TODO:----------------------FInd all Data BY ID ----------------------------------

const getBlogsById = async (req, res) => res.send(res.blog);

// TODO: --------------- Create ------------------------------------
const createBlog = async (req, res) => {
  try {
    // TODO:(1)........
    //    const newBlog =  await Blog.create(req.body); // create return promise
    // TODO:(2).........
    const newBlog = new Blog(req.body); // not async
    await newBlog.save(); //this is async
    res.status(201).send(newBlog); // 201 means created
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(409).send(error.message);
    }
    if (error.code === 11000) {
      return res
        .status(409)
        .send({ message: ` A blog with this title is already exist` });
    }
    res
      .status(500)
      .send({ message: `Somethings went wrong. Please try again!`, error });
  }
};

// TODO: -------------DELETE --------------------------

const deleteBlogById = async (req, res) => {
  const { blogId } = req.params;
  try {
    await Blog.findByIdAndDelete(blogId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send({ message: `Somethings went wrong ${error}` });
  }
};

// TODO: ----------------  Patch -> Update -------------------------------

const updateBlogById = async (req, res) => {
  const { blogId } = req.params;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, {
      returnDocument: "after",
    });
    res.send(updatedBlog);
  } catch (error) {
    res.send({ message: "SOme things went wrong!" }, error);
  }
};

module.exports = {
  getBlogs,
  createBlog,
  getBlogsById,
  deleteBlogById,
  updateBlogById,
};
