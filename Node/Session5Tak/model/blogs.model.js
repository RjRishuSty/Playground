const { required } = require('joi');
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{type:String, required:true, unique:true},
    author:{type:[String], default:[]},
    published:{type:Date, default:null},
},{
    timestamps:true,
    versionKey:false,
});


const blogsModel = mongoose.model("Blog", blogSchema, "blogCollection");

module.exports = blogsModel;