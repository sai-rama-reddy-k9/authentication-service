const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    const uri =
      process.env.ATLAS_URL ||
      "mongodb+srv://sairamareddy:abcd1234@cluster0.6ylzzte.mongodb.net/auth-service-db?appName=Cluster0";
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host} 🍀`);
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
