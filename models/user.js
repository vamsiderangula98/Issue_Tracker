const mongoose = require("mongoose");

// user Schema
const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
   
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", employeeSchema);
module.exports = User;
