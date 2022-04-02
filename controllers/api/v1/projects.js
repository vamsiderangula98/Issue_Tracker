const Project = require("../../../models/projects");

module.exports.project = async function (req, res) {
  let id = req.params.id;
  console.log(id);
  console.log("api search controller reached");
  let projects = await Project.find({}).populate("issues");

  return res.json(200, {
    message: "List of projects",
    projects: projects,
  });
};