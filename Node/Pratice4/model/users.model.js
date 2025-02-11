const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: { type: String, required:true, unique:true },
  name: { type: String, default: "" },
  email: { type: String, unique: true },
},{
    timestamps:true,
    versionKey:false,
});

const userModel = mongoose.model("user", userSchema, "UserCollection");


module.exports = userModel;