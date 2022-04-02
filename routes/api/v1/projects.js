const express = require("express");
const router = express.Router();

const projectApi = require("../../../controllers/api/v1/projects");

router.get("/", projectApi.project);

module.exports = router;
