var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = process.argv[2];

mongo.connect(url, function(err, db) {
    if (err) {
        return console.log(err);
    }
    var collection = db.collection('parrots');
    collection.find({
       age: {
           $gt: +age
       } 
    }, {
        name: 1,
        age: 1,
        _id: 0
    }).toArray(function(err, docs) {
        if (err) {
            return console.log(err);
        }
        console.log(docs);
    });
    db.close();
});