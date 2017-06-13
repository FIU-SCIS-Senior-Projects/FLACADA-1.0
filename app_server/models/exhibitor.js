var mongoose = require('mongoose');

var exhibitorSchema = new mongoose.Schema({
	nameOf: {type: String, required: true},
	imageOf: {type: String, required: true},
	website: {type: String, required: true},
	description: {type: String, required: true}
});

mongoose.model('Exhibitor', exhibitorSchema);