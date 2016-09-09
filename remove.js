const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/' + process.argv[2];
const collName = process.argv[3];
const _id = process.argv[4];

mongo.connect(url, (err, db) => {
    if (err) throw err;

    let collection = db.collection(collName);
    collection.remove({ _id }, (err) => {
        if (err) throw err;
        db.close();
    });
});