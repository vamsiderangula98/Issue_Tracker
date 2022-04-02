const express = require("express");
const router = express.Router();
const issueController=require("../controllers/issue_controller");



//deleting issues route
router.get('/destroy/:id',issueController.destroy);








module.exports = router;