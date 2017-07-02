var mongoose = require('mongoose');
Schema = mongoose.Schema



var speakerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    sessions: [{
        type: Schema.Types.ObjectId,
        ref : 'Session'
    }],
    picture: {
        type: String
    },
    institution: {
        type: String,
    }

});

var sessionSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    speaker: [{
        type: Schema.Types.ObjectId,
        ref : 'Speaker'
    }],
    startTime: {
        type: Date,
        //required: true
    },
    endTime: {
        type: Date,
        //required: true
    },
    location: {
        type: String
    },
    description: {
        type: String
    }
});
var Speakers = mongoose.model('Speaker', speakerSchema, 'speakers');

var Sessions = mongoose.model('Session', sessionSchema, 'sessions');

//module.exports = Sessions;