var mongoose = require('mongoose');
var Exhibitors = mongoose.model('Exhibitor');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* GET /exhibitors */
module.exports.getExhibitors = function(req, res) {
    console.log("Finding exhibitors");
    Exhibitors
    .find(req.query)
    .exec(function(err, exhibitors) {
         if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(exhibitors);
        sendJSONresponse(res, 200, exhibitors);
      });

};
/* POST /exhibitors */
module.exports.createExhibitor = function(req, res){
    console.log(req.body);
    Exhibitors
    .create(req.body, function(err, exhibitor){
        if(err) {
        console.log(err);
        sendJSONresponse(res, 404, err);
        return;
        } 
        console.log('Exhibitor created! ' + exhibitor);
        sendJSONresponse(res, 200, exhibitor);
    });
};

/** DELETE /exhibitors */
module.exports.deleteExhibitors = function(req, res){
    Exhibitors.remove({}, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
}

/** GET /exhibitors/:exhibitorid */
module.exports.getOneExhibitor = function(req, res){
console.log('Finding exhibitor', req.params);
    Exhibitors
      .findById(req.params.exhibitorid)
      .exec(function(err, exhibitor) {
        if (!exhibitor) {
          sendJSONresponse(res, 404, {
            "message": "exhibitor not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(exhibitor);
        sendJSONresponse(res, 200, exhibitor);
      });

};

/** DELETE /exhibitors/:exhibitorid */
module.exports.deleteOneExhibitor = function(req, res){
    var exhibitorid = req.params.exhibitorid;

    Exhibitors.findByIdAndRemove(exhibitorid)
    .exec(function(err, exhibitor){
        if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log("Exhibitor id " + exhibitorid + " deleted");
          sendJSONresponse(res, 204, null);
    })
}