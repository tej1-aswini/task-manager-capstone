const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/User");

mongoose.connect(process.env.DATABASE_URL)
  .then(async () => {
    console.log("Connected");

    await mongoose.connection.collection("users").dropIndexes();

    console.log("Indexes dropped");

    mongoose.connection.close();
  })
  .catch(err => console.log(err));