var mongo = require('mongodb').MongoClient;
var dbName = 'learnyoumongo';

var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
   if (err) { return console.log(err); }
   
   var collection = db.collection('parrots');
   collection.count({
       age: {
           $gt: parseInt(process.argv[2])
       }
   }, function(err, count) {
       if (err) { return console.log(err); }
       console.log(count);
   });
   
   db.close();
});