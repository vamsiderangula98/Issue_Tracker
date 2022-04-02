const Project = require("../models/projects");

const Issue = require("../models/issues");

//for creating new project
module.exports.createNewProject = async function (req, res) {
  const { projectName, projectDescription, projectAuthor } = req.body;

  const project = await Project.create({
    projectName,
    projectDescription,
    projectAuthor,
    user: req.user._id,
  });
 
  await project.save();
  console.log("New project created", project.name);
  if (!project) {
    console.log("error in creating new project");
    return res.redirect("back");
  }
  return res.redirect("/");
};

//controller for rendering create project page
module.exports.createProjectPage = function (req, res) {
  res.render("create_project", {
    title: "create-project",
  });
};

//controller for rendering project details page
module.exports.project_details = function (req, res) {
  let id = req.params.id;
  Project.findById(id)
    .populate("issues")
    .exec(
      //populating issues so we can use them in a front end
      function (err, project) {
        return res.render("project_details", {
          title: "Project Details",
          project: project,
        });
      }
    );
};
module.exports.destroy = async function (req, res) {
  try {
 
    let project = await Project.findById(req.params.id);
    if (project.user == req.user.id) {
      if (project) {
        project.remove();
      }
      await Issue.deleteMany({ project: req.params.id });
      console.log("Project is deleted successsfully");
      return res.redirect("back");
    } else {
      console.log("unauthorized");

      return res.redirect("back");
    }
  } catch (err) {
    console.log("Error in destroying project", err);
    return res.redirect("back");
  }
};
