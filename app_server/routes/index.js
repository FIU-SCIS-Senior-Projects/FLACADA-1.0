var express = require('express');
var router = express.Router();
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

/* GET schedule page */
router.get('/schedule', ctrlConference.scheduleRender);

/* GET schedule page */
router.get('/schedules-info', ctrlConference.schedulesInfoRender);


/* GET speakers page */
router.get('/speakers', ctrlConference.speakersRender);

/* GET speakers page */
router.get('/schedule/speaker/new', ctrlConference.addSpeakerRender);

/* GET speakersInfo page */
router.get('/speakers-info/', ctrlConference.speakersInfoRender);


module.exports = router;