const Blog = require('../models/blog.model');

const findBlogsByIdAndAttch = async (req, res, next)=>{
    const {blogId} = req.params;
    try{
        const reqBlog = await Blog.findById(blogId);
        if(!reqBlog) return res.send({message:'blog not found!'});
        res.blog = reqBlog;
        next();
    }catch(error){
        res.send({message:"Somethings went wrong!"},error);
    }

}

module.exports = findBlogsByIdAndAttch;