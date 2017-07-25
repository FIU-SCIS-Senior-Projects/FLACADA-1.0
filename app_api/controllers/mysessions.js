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
    var userid = req.payload._id;
    MySessions
        .findOne({
            postedBy: userid
        })
        .populate('postedBy sessions')
        .exec(function (err, mysession) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
                return;
            }
            console.log(mysession);
            sendJSONresponse(res, 200, mysession);
        });

};


/* POST /mysessions/sessionid */
module.exports.addMySession = function (req, res) {
    var userid = req.payload._id;
    var sessionid = req.params.sessionid;
    var time = req.body.startTime;
    MySessions
        .findOneAndUpdate({
            postedBy: userid
        }, {
            $addToSet: {
                sessions: sessionid
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
            sendJSONresponse(res, 200, mysession);
        }

        );
};


/** DELETE /mysessions */
module.exports.deleteMySessions = function (req, res) {
    var userid = req.payload._id;

    MySessions
        .findOneAndRemove({
            postedBy: userid
        }, function (err, mysession) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
                return;
            }
            console.log(mysession);
            sendJSONresponse(res, 200, mysession);
        });
}

/** DELETE /mysessions/:sessionid */
module.exports.deleteOneSession = function (req, res) {
    var userid = req.payload._id;
    MySessions.findOneAndUpdate({
        postedBy: userid
    }, {
            $pull: {
                sessions: req.params.sessionid
            }
        }, {
            new: true
        }, function (err, mysession) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
                return;
            }
            console.log(mysession);
            sendJSONresponse(res, 200, mysession);
        });
};
