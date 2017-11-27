var mongoose = require('mongoose');

// { "unit":"npm",
//   "description":"npm booth",
// "measurement unit":"metre",
//   "x-dimension":3,
// "y-dimension":3,
// "x":145,
// "y":200,
// "contact":"Jane Doe"}

var boothSchema = mongoose.Schema({
    boothId: { type: String, unique: true },
    unit: String,
    description: String,
    measurementUnit: String,
    xDimension: Number,
    yDimension: Number,
    x: Number,
    y: Number,
    contact: String
});

module.exports = mongoose.model('Booth', boothSchema);
