const url=require("url");
const Issue = require("../models/issues");
const Project = require("../models/projects");

//module for redirecting create issue page

module.exports.issuePage = function (req, res) {
  let id = req.params.id;

  // finding the project by id  send project details in response to create issue page
  Project.findById(id)
    .populate("issues")
    .exec(function (err, project) {
      return res.render("create_issue", {
        title: "Add Issue",
        project: project,
      });
    });
};

// finding the project by id  and storing its issues in db
module.exports.createIssue = async function (req, res) {


    const { issueName, projectID, issueAuthor, issueDescription} = req.body;
    let project = await Project.findById(projectID);
    


    if (project) {
      
    let issue = await Issue.create({
      //create issue
      issueName,
      issueDescription,
      user:req.user._id,
      label: req.body.label.substr(1).split("^"), // storing lables in the form of array
      issueAuthor,
      project:projectID,
    });
   
    project.issues.push(issue);
    project.save();
    console.log("Issue created Successfullly");
   return res.redirect(`/projects/projects_details/${projectID}`);
    }
  else{
   console.log("error in creating issue"); 
    return res.redirect("back");
  }
};

module.exports.destroy = async function (req, res) {
  try {
 
    let issue = await Issue.findById(req.params.id);
 if(issue.user == req.user.id) {
    let projectID= issue.project;
    issue.remove();
    let project = Project.findByIdAndUpdate(projectID, {
      $pull: { issues: req.params.id },
    });
    
    console.log("issues deleted successfully");
    return res.redirect("back");
}
  
else{
    console.log("unauthorized");
    return res.redirect("back");
}
  }
   catch (err) {
    console.log("Error in deleting issues", err);
    return;
  }
};
