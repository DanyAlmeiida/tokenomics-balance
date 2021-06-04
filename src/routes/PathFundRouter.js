const express = require('express');
const router = express.Router();
const PathFundController = require('../controllers/PathFundController');

router.get('/fetch', PathFundController.fetch);

module.exports = router;