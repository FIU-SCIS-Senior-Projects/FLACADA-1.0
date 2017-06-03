var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var conference = require('../controllers/conference');

/* GET home page. */
router.get('/', conference.homepage);
=======
var ctrlConference = require('../controllers/conference');

/* GET home page. */
router.get('/', ctrlConference.homepageRender);

/* GET more page */
router.get('/conference', ctrlConference.conferenceRender);

/* GET exhibitors page */
router.get('/exhibitors', ctrlConference.exhibitorsRender);

/* GET exhibitorsInfo page */
router.get('/exhibitors-info', ctrlConference.exhibitorsInfoRender);

/* GET sponsors page */
router.get('/sponsors', ctrlConference.sponsorsRender);

/* GET sponsorsInfo page */
router.get('/sponsors-info', ctrlConference.sponsorsInfoRender);
>>>>>>> task-674

module.exports = router;