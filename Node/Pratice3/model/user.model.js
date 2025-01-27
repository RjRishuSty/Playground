
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true }
});

const userSchemaModel = mongoose.model("Register",userSchema);

module.exports = userSchemaModel;