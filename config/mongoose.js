// require library
const mongoose = require("mongoose");

//connecting to database

// mongoose.connect(
//   "mongodb+srv://kunals713:kunal%40713@cluster0.jadmk.mongodb.net/issue-tracker?retryWrites=true&w=majority"
// );

mongoose.connect("mongodb://localhost/issue_trackerDb");

// aquire the connection
const db = mongoose.connection;

// if error occurs
db.on("error", console.error.bind(console, "Error in connecting to DataBase"));

// if running then print message

db.once("open", function () {
  console.log("Connected to database successfully");
});

// export the database
module.exports = db;
