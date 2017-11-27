var express = require('express');
var app = express();
var mongoose = require('mongoose');
var assert = require('assert');

var Booths = require('./models/booth');
var Beacons = require('./models/beacon');
var Events = require('./models/event');

var mongoDbUrl = process.env.MONGODB_URL;
var ca = new Buffer(process.env.MONGODB_CERT_BASE64, 'base64');

var mongoDbOptions = {
    mongos: {
      useMongoClient: true,
      ssl: true,
      sslValidate: true,
      sslCA: ca
    }
}

mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('open', function (err) {
    console.log("CONNECTED...")
    assert.equal(null, err);
});

mongoose.connect(mongoDbUrl, mongoDbOptions);

app.use(require('body-parser').json());

app.use(express.static(__dirname + '/public'));

app.post('/add_booth', function(req,res) {
    // JSON in req.body
    // Insert input validation
    var addBooth = new Booths(req.body);
    addBooth.save(function (err) {
        if (err) {
            res.send('Error saving: ' + err)
            return console.error(err);
        }
        else {
            res.send('Saved booth!!!')
        }
    });
})

app.get('/get_booths', function(req,res) {
    Booths.find(function(err, booths) {
        if (err) {
            res.send('Error saving: ' + err);
            return console.error(err);
        }
        else {
            res.send(booths);
        }
    })
});

app.get('/get_booth/:boothId', function(req,res) {
    Booths.findOne(req.params, function(err, booth) {
        if (err) {
            res.send('Error getting booth: ' + err);
            return console.error(err);
        }
        else if (booth){
            res.send(booth);
        }
        else {
            res.send("Booth not found...")
        }
    });
});

var port = process.env.PORT || 8080
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
