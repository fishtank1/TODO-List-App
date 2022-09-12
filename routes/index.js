const express = require('express');
const home_Controller = require('../controllers/home_controller');
const router = express.Router();

router.get('/', home_Controller.home);

module.exports = router;