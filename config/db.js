const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoDB_URI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};
module.exports = connectDB;
