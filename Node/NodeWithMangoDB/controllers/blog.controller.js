// TODO: importing blogSchema file ...........
const Blog = require("../models/blog.model");

const getBlogs = (req, res) => {
  res.send("Welcome to Blog Page!");
};

const createBlog = async (req, res) => {
  try {
    // TODO:(1)........
    //    const newBlog =  await Blog.create(req.body); // create return promise
    // TODO:(2).........
    const newBlog = new Blog(req.body); // not async
    await newBlog.save(); //this is async
    res.status(201).send(newBlog); // 201 means created
  } catch (error) {
    if(error.name === "ValidationError"){
        return res.status(409).send(error.message)
    }
    if (error.code === 11000) {
      return res
        .status(409)
        .send({ message: ` A blog with this title is already exist` });
    }
    res
      .status(500)
      .send({ message: `Somethings went wrong. Please try again!`,error });
  }
};

module.exports = { getBlogs, createBlog };
