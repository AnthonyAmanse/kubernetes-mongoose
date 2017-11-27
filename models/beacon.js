var mongoose = require('mongoose');

// {"beaconid":"QYUFIHGOE",
//  "x":123,
// "y":456,
// "mincount":23,
// "maxcount":400}

var beaconSchema = mongoose.Schema({
    beaconId: { type: String, unique: true },
    x: Number,
    y: Number,
    minCount: Number,
    maxCount: Number
})

module.exports = mongoose.model('Beacon', beaconSchema);
