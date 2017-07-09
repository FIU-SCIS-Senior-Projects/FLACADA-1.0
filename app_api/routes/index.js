var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
secret: process.env.JWT_SECRET,
userProperty: 'payload'
});

var ctrlExhibitor = require('../controllers/exhibitors');
var ctrlSponsor = require('../controllers/sponsors');
var ctrlSession = require('../controllers/sessions');
var ctrlSpeaker = require('../controllers/speakers');
var ctrlAuth = require('../controllers/authentication');

/* Exhibitors */
router.get('/exhibitors', ctrlExhibitor.getExhibitors);
router.post('/exhibitors', ctrlExhibitor.createExhibitor);
router.delete('/exhibitors', ctrlExhibitor.deleteExhibitors);
router.get('/exhibitors/:exhibitorid', ctrlExhibitor.getOneExhibitor);
router.delete('/exhibitors/:exhibitorid', ctrlExhibitor.deleteOneExhibitor);

/* Sponsors */ 
router.get('/sponsors', ctrlSponsor.getSponsors);
router.post('/sponsors', ctrlSponsor.createSponsor);
router.delete('/sponsors', ctrlSponsor.deleteSponsors);
router.get('/sponsors/:sponsorid', ctrlSponsor.getOneSponsor);
router.delete('/sponsors/:sponsorid', ctrlSponsor.deleteOneSponsor);

/*Sessions */
router.get('/sessions', ctrlSession.getSessions);
router.post('/sessions', ctrlSession.createSession);
router.delete('/sessions', ctrlSession.deleteSessions);
router.get('/sessions/:sessionid', ctrlSession.getOneSession);
router.delete('/sessions/:sessionid', ctrlSession.deleteOneSession);
router.post('/sessions/:sessionid/speakers', ctrlSession.createSessionSpeaker);

/** Speakers */
router.get('/speakers', ctrlSpeaker.getSpeakers);
router.delete('/speakers', ctrlSpeaker.deleteSpeakers);
router.get('/speakers/:speakerid', ctrlSpeaker.getOneSpeaker);
router.delete('/speakers/:speakerid', ctrlSpeaker.deleteOneSpeaker);
router.post('/speakers/:speakerid/sessions', ctrlSpeaker.createSpeakerSession);

//login and register
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


module.exports = router;
