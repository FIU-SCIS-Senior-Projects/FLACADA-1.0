var express = require('express');
var router = express.Router();
var ctrlExhibitor = require('../controllers/exhibitors');
var ctrlSponsor = require('../controllers/sponsors');
var ctrlSession = require('../controllers/sessions');
var ctrlSpeaker = require('../controllers/speakers');

/* GET exhibitors */
router.get('/exhibitors', ctrlExhibitor.getExhibitors);
router.post('/exhibitors', ctrlExhibitor.createExhibitor);

router.get('/exhibitors/:exhibitorid', ctrlExhibitor.getOneExhibitor);
router.delete('/exhibitors/:exhibitorid', ctrlExhibitor.deleteOneExhibitor);
/* GET sponsors */ 
router.get('/sponsors', ctrlSponsor.getSponsors);
router.post('/sponsors', ctrlSponsor.createSponsor);
router.get('/sponsors/:sponsorid', ctrlSponsor.getOneSponsor);
router.delete('/sponsors/:sponsorid', ctrlSponsor.deleteOneSponsor);

/* GET sessions */
/*
router.get('/sessions', ctrlSession.getSessions);
router.post('/sessions', ctrlSession.createSessions);
router.get('/sessions/:sessionid', ctrlSession.getOneSession);
router.delete('/sessions/:sessionid', ctrlSession.deleteOneSession);
router.get('/sessions/:sessionid/speakers/:speakerid', ctrlSession.getSessionSpeakers);
*/

/* GET speakers */
/*
router.get('/speakers', ctrlSpeaker.getSpeakers);
router.post('/speakers', ctrlSpeaker.createSpeakers);
router.get('/speakers/:speakerid', ctrlSpeaker.getOneSpeakers);
router.delete('/speakers/:speakerid', ctrlSpeaker.deleteOneSpeaker);
router.get('/speakers/:speakerid/sessions/:sessionid', ctrlSpeaker.getSpeakerSessions);

*/
module.exports = router;
