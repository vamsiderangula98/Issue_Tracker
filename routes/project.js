const express = require("express");
const router = express.Router();
const projectController=require('../controllers/projectController');
router.get('/',projectController.home);
// router.get('/form',projectController.newForm);

module.exports = router;