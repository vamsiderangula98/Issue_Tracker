
const mongoose = require("mongoose");

// creating schema for project

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      unique: true,
    },
    projectDescription: {
      type: String,
      max: 200,
    },
    projectAuthor: {
      type: String,
      required: true,
    },
    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issues",
      },
    ],
    user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
