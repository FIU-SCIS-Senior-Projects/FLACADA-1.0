var mongoose = require('mongoose');

var exhibitorSchema = new mongoose.Schema({
	name: {
		type: String, 
		required: true
	},
	image: {
		type: String, 
		//required: true
	},
	website: {
		type: String, 
		//required: true
	},
	description: {
		type: String, 
		required: true
	}
});

mongoose.model('Exhibitor', exhibitorSchema, 'exhibitors');