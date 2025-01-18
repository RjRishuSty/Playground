// TODO: (1) import mongoose
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // mongoose.connect('mongodb://127.0.0.1:27017')  //TODO: you can also connect like this

    await mongoose.connect(process.env.DB_URI); // TODO: This is better way to connect
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Failed to Connect.", error);
  }
};

module.exports = connectDB;
