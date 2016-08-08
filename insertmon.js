var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var user = {
    firstName: process.argv[2],
    lastName: process.argv[3]
};

mongo.connect(url, function(err, db) {
    if (err) {
        return console.log(err);
    }
    var collection = db.collection('users');
    collection.insert(user, function(err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(JSON.stringify(user));
    });
    db.close();
});