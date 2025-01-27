const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {type: String, required:true, unique:true},
  author: {type: [String], default:[] },   // TODO: array of strings
  content: {type: String, default:""},
  publishedAt: {type: Date, default:null},
},{
  timestamps:true,  // add the time 
  versionKey:false,  // in data has __v . so this keyword stop to adding
});
const blogModel = mongoose.model("Blog", blogSchema);

// const blogModel = mongoose.model("Blog", blogSchema, "BlogsCollections"); //collection name is blog and data pattern is blogShcema . third paramets is optional ther you custimise your collection name.

module.exports = blogModel;
