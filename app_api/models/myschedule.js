
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var myScheduleSchema = new Schema({
  postedBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  sessions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Session'
    }
  ]
}, {
  timestamps: true
});


mongoose.model('MySchedule', myScheduleSchema);

