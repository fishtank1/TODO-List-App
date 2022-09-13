const express = require('express');
const home_Controller = require('../controllers/home_controller');
const action_Controller = require('../controllers/action_controller');
const router = express.Router();

router.get('/', home_Controller.home);

router.post('/action', action_Controller.action);

module.exports = router;