var mongoose = require('mongoose');
var Speakers = mongoose.model('Speaker');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* GET /speakers */
module.exports.getSpeakers = function(req, res) {
    console.log("Finding Speakers");
    Speakers
    .find(req.query)
    .populate('sessions')
    .exec(function(err, speakers) {
         if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(speakers);
        sendJSONresponse(res, 200, speakers);
      });

};

/** DELETE /speakers */
module.exports.deleteSpeakers = function(req, res){
    Speakers.remove({}, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
}

/** GET /speakers/:speakerid */
module.exports.getOneSpeaker = function(req, res){
console.log('Finding speaker', req.params);
    Speakers
      .findById(req.params.speakerid)
      .populate('sessions')
      .exec(function(err, speaker) {
        if (!speaker) {
          sendJSONresponse(res, 404, {
            "message": "Speaker not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(speaker);
        sendJSONresponse(res, 200, speaker);
      });

};

/** DELETE /speakers/:speakerid */
module.exports.deleteOneSpeaker = function(req, res){
    var speakerid = req.params.speakerid;

    Speakers
    .findByIdAndRemove(speakerid)
    .exec(function(err, speaker){
        if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log("Speaker id " + speakerid + " deleted");
          sendJSONresponse(res, 204, "Speaker deleted");
    });
};
