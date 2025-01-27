const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connection is successfully!");
  } catch (error) {
    console.log("Failed to Connection!", error);
  }
};

module.exports = connectDB;
