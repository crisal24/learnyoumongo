var mongo = require('mongodb').MongoClient
var limit = parseInt(process.argv[2], 10)

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    var collection = db.collection('parrots')
    collection.count({
        'age': {$gt: limit}
    }, function(err, count){
        console.log(count)
        db.close()
    })
})
