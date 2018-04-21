var mongoose = require('./db');
var Schema = mongoose.Schema;

var floor_schema = new Schema({
    floorNo: Number,
    status: String,
    gender: String,
    currentActivity: {
        typ: String,
        description: String,
        organizer: String,
        uid: String,
        timeEnd: {type: Date}
    },
    futureActivities: [{
        typ: String,
        description: String,
        organizer: String,
        uid: String,
        timeStart: {type: Date},
        timeEnd: {type: Date}
    }]
});

module.exports = mongoose.model('Floor', floor_schema);