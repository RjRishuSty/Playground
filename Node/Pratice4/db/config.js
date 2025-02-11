const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
