var mongoose = require('mongoose');
var MySessions = mongoose.model('MySchedule');
var User = mongoose.model('User');



var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

/* GET /mysessions */
module.exports.getMySessions = function (req, res) {

    console.log("Finding my sessions");
    console.log(req.payload._id);
    var userId = req.payload._id;
    MySessions
        .findOne({
            postedBy: userId
        })
        .populate('postedBy sessions')
        .exec(function (err, mysession) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
                return;
            }
            console.log(session);
            sendJSONresponse(res, 200, mysession);
        });

};


/* POST /mysessions */
module.exports.addMySession = function (req, res) {
    var userId = req.payload._id;
    MySessions
        .findOneAndUpdate({
            postedBy: userId
        }, {
            $addToSet: {
                sessions: req.body
            }
        }, {
            upsert: true,
            new: true
        }, function (err, mysession) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
                return;
            }
            console.log(session);
            sendJSONresponse(res, 200, mysession);
        });
};


/** DELETE /mysessions */
module.exports.deleteMySessions = function (req, res) {
    var userId = req.payload._id;

    MySessions
        .findOneAndRemove({
            postedBy: userId
        }, function (err, mysession) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
                return;
            }
            console.log(session);
            sendJSONresponse(res, 200, mysession);
        });
}

/** DELETE /mysessions/:sessionid */
module.exports.deleteOneSpeaker = function (req, res) {

    var userId = req.payload._id;

    Favorites.findOneAndUpdate({
        postedBy: userId
    }, {
            $pull: {
                sessions: req.params.sessionId
            }
        }, {
            new: true
        }, function (err, mysession) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
                return;
            }
            console.log(session);
            sendJSONresponse(res, 200, mysession);
        });
};
