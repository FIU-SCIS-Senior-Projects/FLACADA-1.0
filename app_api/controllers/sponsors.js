var mongoose = require('mongoose');
var Sponsors = mongoose.model('Sponsor');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* GET /sponsors */
module.exports.getSponsors = function(req, res) {
    console.log("Finding sponsors");
    Sponsors
    .find(req.query)
    .exec(function(err, sponsors) {
         if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(sponsors);
        sendJSONresponse(res, 200, sponsors);
      });

};
/* POST /sponsors */
module.exports.createSponsor = function(req, res){
    console.log(req.body);
    Sponsors
    .create(req.body, function(err, sponsor){
        if(err) {
        console.log(err);
        sendJSONresponse(res, 404, err);
        return;
        } 
        console.log('Sponsor created! ' + sponsor);
        sendJSONresponse(res, 200, sponsor);
    });
};

/** DELETE /sponsors */
module.exports.deleteSponsors = function(req, res){
    Sponsors.remove({}, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
}

/** GET /sponsors/:sponsorid */
module.exports.getOneSponsor = function(req, res){
console.log('Finding Sponsor', req.params);
    Sponsors
      .findById(req.params.sponsorid)
      .exec(function(err, sponsor) {
        if (!sponsor) {
          sendJSONresponse(res, 404, {
            "message": "Sponsor not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(sponsor);
        sendJSONresponse(res, 200, sponsor);
      });

};

/** DELETE /sponsors/:sponsorid */
module.exports.deleteOneSponsor = function(req, res){
    var sponsorid = req.params.sponsorid;

    Sponsors.findByIdAndRemove(sponsorid)
    .exec(function(err, sponsor){
        if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log("Sponsor id " + sponsorid + " deleted");
          sendJSONresponse(res, 204, null);
    });
};