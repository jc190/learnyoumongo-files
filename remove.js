var mongo = require('mongodb').MongoClient;
var dbName = process.argv[2];

var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
   if (err) { return console.log(err); }
   
   var collection = db.collection(process.argv[3]);
   collection.remove({
       _id: process.argv[4]
   }, function(err, data) {
      if (err) { return console.log(err); }
      console.log("User removed.");
   });
   
   db.close();
});