const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{type:String, require:true, unique:true},
    authore:{type:[String], default:[]},
    publishedAt:{type:Date, default:null},
})

const blogModel =  mongoose.model("Blogs", blogSchema);

module.exports = blogModel;