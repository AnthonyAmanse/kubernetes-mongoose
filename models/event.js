var mongoose = require('mongoose');

// [
// {"event":"index",
// "location":"san francisco",
// "start date":"Feb 20, 2018",
// "end date": "Feb 24, 2018",
// "map":[{booth},{booth}]",
// "beacons":[]},

// {"event":"think",
// "location":"las vegas",
// "start date":"March 20, 2018",
// "end date": "March 24, 2018",
// "map":[{booth},{booth}]", "beacons":[]}]

var Booths = require('../models/booth')
var Beacons = require('../models/beacon');

var eventSchema = mongoose.Schema({
    eventId: { type: String, unique: true },
    eventDescription: String,
    location: String,
    startDate: Date,
    endDate: Date,
    map: [Booths.schema],
    beacons: [Beacons.schema]
})

module.exports = mongoose.model('Event', eventSchema);
