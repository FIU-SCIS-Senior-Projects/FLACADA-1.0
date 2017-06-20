var mongoose = require('mongoose');
var sponsors = mongoose.model('Sponsor');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* GET /sponsors */
module.exports.getSponsors = function(req, res) {
    console.log("Finding sponsors");
    sponsors
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
    sponsors
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

/** GET /sponsors/:sponsorid */
module.exports.getOneSponsor = function(req, res){
console.log('Finding Sponsor', req.params);
    sponsors
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

    sponsors.findByIdAndRemove(sponsorid)
    .exec(function(err, sponsor){
        if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log("Sponsor id " + sponsorid + " deleted");
          sendJSONresponse(res, 204, null);
    })
}