const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';
const age = parseInt(process.argv[2]);

mongo.connect(url, (err, db) => {
    if (err) throw err;

    let parrots = db.collection('parrots');
    parrots.find({
        age: {
            $gt: age
        }
    }).project({
        _id: 0
    }).toArray((err, docs) => {
        if (err) throw err;

        console.log(docs);
    });

    db.close();
});