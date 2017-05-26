var express = require('express');
var router = express.Router();
var conference = require('../controllers/conference');

/* GET home page. */
router.get('/', conference.homepage);

module.exports = router;