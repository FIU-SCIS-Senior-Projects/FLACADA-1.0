var express = require('express');
var router = express.Router();
var ctrlExhibitor = require('../controllers/exhibitors');
var ctrlSponsor = require('../controllers/sponsors');
var ctrlSession = require('../controllers/sessions');
var ctrlSpeaker = require('../controllers/speakers');

/* GET exhibitors */
router.get('/exhibitors', ctrlExhibitor.getExhibitors);
router.post('/exhibitors', ctrlExhibitor.createExhibitor);
router.delete('/exhibitors', ctrlExhibitor.deleteExhibitors);
router.get('/exhibitors/:exhibitorid', ctrlExhibitor.getOneExhibitor);
router.delete('/exhibitors/:exhibitorid', ctrlExhibitor.deleteOneExhibitor);

/* GET sponsors */ 
router.get('/sponsors', ctrlSponsor.getSponsors);
router.post('/sponsors', ctrlSponsor.createSponsor);
router.delete('/sponsors', ctrlSponsor.deleteSponsors);
router.get('/sponsors/:sponsorid', ctrlSponsor.getOneSponsor);
router.delete('/sponsors/:sponsorid', ctrlSponsor.deleteOneSponsor);

/* GET sessions */
router.get('/sessions', ctrlSession.getSessions);
router.post('/sessions', ctrlSession.createSession);
router.delete('/sessions', ctrlSession.deleteSessions);
router.get('/sessions/:sessionid', ctrlSession.getOneSession);
router.put('/sessions/:sessionid', ctrlSession.updateOneSession);
router.delete('/sessions/:sessionid', ctrlSession.deleteOneSession);
router.post('/sessions/:sessionid/speakers', ctrlSession.createSessionSpeaker);
router.get('/sessions/:sessionid/speakers', ctrlSession.getSessionSpeakers);


router.get('/speakers', ctrlSpeaker.getSpeakers);
router.post('/speakers', ctrlSpeaker.createSpeaker);
router.delete('/speakers', ctrlSpeaker.deleteSpeakers);
router.get('/speakers/:speakerid', ctrlSpeaker.getOneSpeaker);
router.delete('/speakers/:speakerid', ctrlSpeaker.deleteOneSpeaker);
router.get('/speakers/:speakerid/sessions', ctrlSpeaker.getSpeakerSessions);


module.exports = router;
