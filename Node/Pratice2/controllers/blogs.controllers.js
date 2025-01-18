const BlogModel = require('../models/blogs.model');
const getBlogs = (req, res)=>{
    res.send('Welcome to Blogs Page!');
}

const createBlogs = async(req, res)=>{
    try{
        const newBlog = await BlogModel.create(req.body);
        res.status(201).send(newBlog);
    }catch(error){
        if(error.code === 11000){
            return res.send('The title of blog is already exits. Title must be unique');
        }
        if(error.name ==="ValidationError"){
            return res.send(error.message);
        }
        res.status(500).send({message:`Somethings went to wrong`, error});
    }
}

module.exports = {getBlogs,createBlogs};