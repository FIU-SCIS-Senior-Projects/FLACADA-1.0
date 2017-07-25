var mongoose = require('mongoose');
var Sessions = mongoose.model('Session');
var Speakers = mongoose.model('Speaker');
var User = mongoose.model('User');


var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

/* GET /sessions */
module.exports.getSessions = function (req, res) {
    console.log("Finding sessions");
    Sessions
        .find(req.query)
        .populate('speaker')
        .exec(function (err, sessions) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
                return;
            }
            console.log(sessions);
            sendJSONresponse(res, 200, sessions);
        });

};
/* POST /sessions */
module.exports.createSession = function (req, res) {
    console.log(req.body);
    Sessions
        .create(req.body, function (err, session) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
                return;
            }
            console.log('Session created! ' + session);
            sendJSONresponse(res, 200, session);
        });
};

/** DELETE /sessions */
module.exports.deleteSessions = function (req, res) {
    Sessions
        .remove({}, function (err, resp) {
            if (err) next(err);
            res.json(resp);
    });
}

/** GET /sessions/:sessionid */
module.exports.getOneSession = function (req, res) {
    console.log('Finding Session', req.params);
    Sessions
        .findById(req.params.sessionid)
        .populate('speaker')
        .exec(function (err, session) {
            if (!session) {
                sendJSONresponse(res, 404, {
                    "message": "session not found"
                });
                return;
            } else if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
                return;
            }
            console.log(session);
            sendJSONresponse(res, 200, session);
        });

};


/** DELETE /sessions/:sessionid */
module.exports.deleteOneSession = function (req, res) {
    var sessionid = req.params.sessionid;

    Sessions
        .findByIdAndRemove(sessionid)
        .exec(function (err, session) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
                return;
            }
            console.log("Session id " + sessionid + " deleted");
            sendJSONresponse(res, 204, null);
        });
};

/** POST 
 * create speaker for session
 * /sessions/:sessionid/speakers */
module.exports.createSessionSpeaker = function (req, res) {
    var sessionid = req.params.sessionid
    var speakerid;
    Sessions.findById(sessionid, function (err, session) {
        if (err) throw err;
        Speakers
            .create(req.body, function (err, speaker) {
                if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                speakerid = speaker._id;
                speaker.sessions.push(sessionid);
                speaker.save(function (err, speaker) {
                    if (err) {
                        console.log(err);
                        sendJSONresponse(res, 404, err);
                        return;
                    }
                    console.log('Created and pushed speaker into session!' + speakerid);
                });

                session.speaker.push(speakerid);
                session.save(function (err, session) {
                    if (err) {
                        console.log(err);
                        sendJSONresponse(res, 404, err);
                        return;
                    }
                    console.log('Updated sessions!');
                    sendJSONresponse(res, 200, speaker);
                });
            });
    });
};

