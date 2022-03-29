const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
      },
     labels:[{
          type:String,
          required:true,
      },],
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
      },
    author: {
        type: String,
        required: true,
      },
    issue: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Issue= mongoose.model('Question', issueSchema);
module.exports = Issue;