MongoClient = require('mongodb').MongoClient,
    ObjectId    = require('mongodb').ObjectID,
    //url         = 'mongodb://2school666:25ch001666@ds043324.mongolab.com:43324/2school',
	url         = 'mongodb://localhost/2school',

    exports.ejecute = function (handler) {
    	MongoClient.connect(url,handler);
    };