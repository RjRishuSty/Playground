const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('DB is Connected')
  } catch (error) {
    console.log(`Failed to connect DB ${error}`);
  }
};

module.exports = connectDB;
