const express = require('express');
const home_Controller = require('../controllers/home_controller');
const action_Controller = require('../controllers/action_controller');
const delete_Controller = require('../controllers/delete_controller');
const router = express.Router();

router.get('/', home_Controller.home);

router.post('/action', action_Controller.action);

router.post('/delete', delete_Controller.delete);

module.exports = router;