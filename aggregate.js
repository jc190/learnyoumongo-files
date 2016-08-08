var mongo = require('mongodb').MongoClient;
var dbName = 'learnyoumongo';
var colName = 'prices';

var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
   if (err) { return console.log(err); }
   
   var collection = db.collection(colName);
   
   collection.aggregate([{
       $match: {
           size: process.argv[2]
       }
   }, {
       $group: {
           _id: 'average',
           total: {
               $avg: '$price'
           },
       }
   }], function(err, data) {
       if (err) { return console.log(err); }
       console.log(Number(data[0].average).toFixed(2));
   })
   
   db.close();
});