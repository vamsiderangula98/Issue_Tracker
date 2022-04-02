const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");
const passport=require("../config/passport-local-strategy");

router.get("/",passport.checkAuthentication,homeController.home);

router.use("/projects", require("./projects"));
router.use("/issues",require("./issues"))
router.use("/users",require("./users"));

router.use("/api", require("./api"));

module.exports = router;
