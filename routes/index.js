const express = require("express");
const router = express.Router();
const passport=require('../config/passport-local-strategy');
const homeController= require("../controllers/homeController");

//route for home
router.get("/",passport.checkAuthentication,homeController.home);

 //route for projects
 router.use("/project", require("./project"));

//route for issues
 router.use("/issue", require("./issue"));
 router.use("/users",require('./users'));

module.exports = router;
