var mongoose = require('mongoose');

var sponsorSchema = new mongoose.Schema({
	name: {
		type: String, 
		required: true
	},
	image: {
		type: String, 
		//default: ""
		//required: true
	},
	website: {
		type: String, 
		//default: ""
		//required: true
	},
	description: {
		type: String, 
		required: true
	}
});

mongoose.model('Sponsor', sponsorSchema, 'sponsors');