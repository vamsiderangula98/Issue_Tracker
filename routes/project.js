const express = require("express");
const router = express.Router();
const passport=require('../config/passport-local-strategy');
const projectController=require('../controllers/projectController');
router.get('/',projectController.newform);
// router.get('/form',projectController.newForm);
router.post('/create',projectController.create);

module.exports = router;