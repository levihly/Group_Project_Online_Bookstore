const mongoose = require('mongoose');

// connecting to DB
const dbConnect = () => {
  mongoose.connect(process.env.DB);

  mongoose.connection.on("connected", () => {
    console.log("Connected to database successfully!");
  });

  mongoose.connection.on("error", (err) => {
    console.log(`Error connecting to database: ${err}`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from Mongodb.");
  });
};

module.exports = dbConnect
