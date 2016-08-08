var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var dbName = process.argv[2];

mongo.connect(url, function(err, db) {
   if (err) { return console.log(err); }
   
   var collection = db.collection('users');
   collection.update({
      username: 'tinatime'
   }, {
      $set: {
         age: 40
      }
   }, function(err, data) {
      if (err) { return console.log(err); }
   });
   
   db.close();
});