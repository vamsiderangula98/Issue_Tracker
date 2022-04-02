const mongoose = require("mongoose");

// creating schema for project

const issueSchema = new mongoose.Schema(
  {
    issueName: {
      type: String,
      required: true,
      unique: true,
    },
    issueDescription: {
      type: String,
      max: 200,
    },
    label: [
      {
        type: String,
      },
    ],
    issueAuthor: {
      type: String,
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Project",
    },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      },

  },
  {
    timestamps: true,
  }
);

const Issues = mongoose.model("Issues", issueSchema);
module.exports = Issues;
