const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// User model (same as yours)
const User = require("./models/User");

async function deleteUsers() {
  try {
    const result = await User.deleteMany({});
    console.log("Users deleted:", result.deletedCount);
  } catch (err) {
    console.log("Error:", err);
  } finally {
    mongoose.connection.close();
  }
}

deleteUsers();