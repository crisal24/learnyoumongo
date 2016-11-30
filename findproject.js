var mongo = require('mongodb').MongoClient
var limit = parseInt(process.argv[2], 10)

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    var collection = db.collection('parrots')
    docarray = collection.find({
        'age': {$gt: limit}
    }, { 
        name: 1,
        age: 1,
        _id: 0
    }).toArray(function(err, documents){
        console.log(documents)
    })
    db.close()
})
