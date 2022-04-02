const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projects_controller");
const issueController = require("../controllers/issue_controller");

// route for redirecrting create project page
router.get("/create_project_page", projectController.createProjectPage);

//route for creating new project
router.post("/create_project", projectController.createNewProject);
//deleting project
router.get("/destroy/:id",projectController.destroy);

//route for creating new issue
router.post("/create_issue", issueController.createIssue);

//route for redirecting to project details page
router.get("/projects_details/:id", projectController.project_details);

//route for redirecting create issue page
router.get("/create_issue_page/:id", issueController.issuePage);

module.exports = router;
