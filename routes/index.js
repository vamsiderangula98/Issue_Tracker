const express = require("express");
const router = express.Router();
const homeController= require("../controllers/homeController");

//route for home
router.get("/", homeController.home);
router.get("/form",homeController.form);

 //route for projects
 router.use("/project", require("./project"));

//route for issues
 router.use("/issue", require("./issue"));

module.exports = router;
