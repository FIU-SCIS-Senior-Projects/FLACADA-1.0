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
var ctrlMySession = require('../controllers/mysessions');

/* Exhibitors */
router.get('/exhibitors', ctrlExhibitor.getExhibitors);
router.post('/exhibitors',auth, ctrlExhibitor.createExhibitor);
router.delete('/exhibitors',auth, ctrlExhibitor.deleteExhibitors);
router.get('/exhibitors/:exhibitorid', ctrlExhibitor.getOneExhibitor);
router.delete('/exhibitors/:exhibitorid', auth, ctrlExhibitor.deleteOneExhibitor);

/* Sponsors */
router.get('/sponsors', ctrlSponsor.getSponsors);
router.post('/sponsors', auth, ctrlSponsor.createSponsor);
router.delete('/sponsors', auth, ctrlSponsor.deleteSponsors);
router.get('/sponsors/:sponsorid', ctrlSponsor.getOneSponsor);
router.delete('/sponsors/:sponsorid', auth, ctrlSponsor.deleteOneSponsor);

/*Sessions */
router.get('/sessions', ctrlSession.getSessions);
router.post('/sessions', auth, ctrlSession.createSession);
router.delete('/sessions', auth, ctrlSession.deleteSessions);
router.get('/sessions/:sessionid', ctrlSession.getOneSession);
router.delete('/sessions/:sessionid', auth, ctrlSession.deleteOneSession);
router.post('/sessions/:sessionid/speakers', auth, ctrlSession.createSessionSpeaker); // add speaker to a session

/** Speakers */
router.get('/speakers', ctrlSpeaker.getSpeakers);
router.delete('/speakers', auth, ctrlSpeaker.deleteSpeakers);
router.get('/speakers/:speakerid', ctrlSpeaker.getOneSpeaker);
router.delete('/speakers/:speakerid', auth, ctrlSpeaker.deleteOneSpeaker);
router.post('/speakers/:speakerid/sessions', auth, ctrlSpeaker.createSpeakerSession); //add session to a speaker
router.post('/speakers',auth, ctrlSpeaker.createSpeaker);

//login and register
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//my sesssions
router.get('/mysessions', auth, ctrlMySession.getMySessions);
router.post('/mysessions/:sessionid', auth, ctrlMySession.addMySession);
router.delete('/mysessions', auth, ctrlMySession.deleteMySessions);
router.delete('/mysessions/:sessionid', auth, ctrlMySession.deleteOneSession);

module.exports = router;
