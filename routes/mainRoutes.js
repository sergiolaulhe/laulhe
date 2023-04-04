const express = require('express');
const router = express.Router();

// ***** Controller Requirer ***** //

const mainController = require('../controllers/mainController');

// ***** Home Page ***** //
router.get('/', mainController.index);

module.exports = router;