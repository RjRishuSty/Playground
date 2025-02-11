const getBlogs = (req, res)=>{
    res.send("blogs");
}

const createNewBlog = (req, res)=>{
    res.send("Blog");
}


module.exports = {getBlogs,createNewBlog};