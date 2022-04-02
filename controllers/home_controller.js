const Projects = require("../models/projects");

module.exports.home = async function (req, res) {
let projects= await Projects.find({});
    return res.render("home", {
      title: "Home",
      projects: projects,
    });
  
};
