# Kubernetes Mongoose

## APIs
* Get Beacons
```
$ curl -x http://169.46.74.117/get_beacons
[{"_id":"5a1ddb51efe299e4d112f9ea","beaconId":"B01","x":2,"y":5,"minCount":1,"maxCount":100,"__v":0},{"_id":"5a1ddb88efe299e4d112f9eb","beaconId":"B02","x":11,"y":4,"minCount":1,"maxCount":100,"__v":0},{"_id":"5a1ddb94efe299e4d112f9ec","beaconId":"B03","x":19,"y":20,"minCount":1,"maxCount":100,"__v":0},{"_id":"5a1ddbb9efe299e4d112f9ed","beaconId":"B04","x":10,"y":11,"minCount":1,"maxCount":100,"__v":0}]
```
* Get Booths
```
$ curl -x http://169.46.74.117/get_booths
[{"_id":"5a1dd603efe299e4d112f9e3","boothId":"A01","unit":"Node","description":"Node description","measurementUnit":"metre","xDimension":3,"yDimension":3,"x":0,"y":0,"contact":"John Doe","__v":0},{"_id":"5a1dd7b6efe299e4d112f9e4","boothId":"A02","unit":"MongoDB","description":"MongoDB is not a relational database","measurementUnit":"metre","xDimension":5,"yDimension":4,"x":16,"y":1,"contact":"Mary Jane","__v":0},{"_id":"5a1dd853efe299e4d112f9e5","boothId":"A03","unit":"Swift","description":"Swift is not just for iOS","measurementUnit":"metre","xDimension":6,"yDimension":2,"x":6,"y":4,"contact":"Jane Doe","__v":0},{"_id":"5a1dd893efe299e4d112f9e6","boothId":"A04","unit":"VR","description":"Virtual Reality is growing","measurementUnit":"metre","xDimension":9,"yDimension":7,"x":4,"y":8,"contact":"Smith John","__v":0},{"_id":"5a1dd8c1efe299e4d112f9e7","boothId":"A05","unit":"Watson","description":"IBM Watson.","measurementUnit":"metre","xDimension":3,"yDimension":5,"x":16,"y":8,"contact":"Catherine May","__v":0},{"_id":"5a1dd8e5efe299e4d112f9e8","boothId":"A06","unit":"Info","description":"Information Booth","measurementUnit":"metre","xDimension":7,"yDimension":3,"x":11,"y":17,"contact":"Ben Jerry","__v":0},{"_id":"5a1dd920efe299e4d112f9e9","boothId":"A07","unit":"IBM Cloud","description":"Used to be called Bluemix","measurementUnit":"metre","xDimension":4,"yDimension":4,"x":3,"y":17,"contact":"Joe Myers","__v":0}]
```
* Get Events
```
$ curl -x http://169.46.74.117/get_events
[{"_id":"5a1de316b46012e66d473a8a","eventId":"E01","eventDescription":"Index","location":"San Francisco","startDate":"2018-02-20T00:00:00.000Z","endDate":"2018-02-24T00:00:00.000Z","__v":0,"beacons":[{"__v":0,"maxCount":100,"minCount":1,"y":5,"x":2,"beaconId":"B01","_id":"5a1ddb51efe299e4d112f9ea"},{"__v":0,"maxCount":100,"minCount":1,"y":4,"x":11,"beaconId":"B02","_id":"5a1ddb88efe299e4d112f9eb"},{"__v":0,"maxCount":100,"minCount":1,"y":20,"x":19,"beaconId":"B03","_id":"5a1ddb94efe299e4d112f9ec"},{"__v":0,"maxCount":100,"minCount":1,"y":11,"x":10,"beaconId":"B04","_id":"5a1ddbb9efe299e4d112f9ed"}],"map":[{"__v":0,"contact":"John Doe","y":0,"x":0,"yDimension":3,"xDimension":3,"measurementUnit":"metre","description":"Node description","unit":"Node","boothId":"A01","_id":"5a1dd603efe299e4d112f9e3"},{"__v":0,"contact":"Mary Jane","y":1,"x":16,"yDimension":4,"xDimension":5,"measurementUnit":"metre","description":"MongoDB is not a relational database","unit":"MongoDB","boothId":"A02","_id":"5a1dd7b6efe299e4d112f9e4"},{"__v":0,"contact":"Jane Doe","y":4,"x":6,"yDimension":2,"xDimension":6,"measurementUnit":"metre","description":"Swift is not just for iOS","unit":"Swift","boothId":"A03","_id":"5a1dd853efe299e4d112f9e5"},{"__v":0,"contact":"Smith John","y":8,"x":4,"yDimension":7,"xDimension":9,"measurementUnit":"metre","description":"Virtual Reality is growing","unit":"VR","boothId":"A04","_id":"5a1dd893efe299e4d112f9e6"},{"__v":0,"contact":"Catherine May","y":8,"x":16,"yDimension":5,"xDimension":3,"measurementUnit":"metre","description":"IBM Watson.","unit":"Watson","boothId":"A05","_id":"5a1dd8c1efe299e4d112f9e7"},{"__v":0,"contact":"Ben Jerry","y":17,"x":11,"yDimension":3,"xDimension":7,"measurementUnit":"metre","description":"Information Booth","unit":"Info","boothId":"A06","_id":"5a1dd8e5efe299e4d112f9e8"},{"__v":0,"contact":"Joe Myers","y":17,"x":3,"yDimension":4,"xDimension":4,"measurementUnit":"metre","description":"Used to be called Bluemix","unit":"IBM Cloud","boothId":"A07","_id":"5a1dd920efe299e4d112f9e9"}]}]
```

## JSON

* Beacons
```
{
    beaconId: String,
    x: Number,
    y: Number,
    minCount: Number,
    maxCount: Number
}
```

* Booths
```
{
    boothId: String,
    unit: String,
    description: String,
    measurementUnit: String,
    xDimension: Number,
    yDimension: Number,
    x: Number,
    y: Number,
    contact: String
}
```

* Events
```
{
    eventId: String,
    eventDescription: String,
    location: String,
    startDate: Date,
    endDate: Date,
    map: [Booth,Booth,...],
    beacons: [Beacon,Beacon,...]
}
```
