const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
    if (err) {
        console.error('Error connecting to db:', err);
        throw err;
    }

    let parrots = db.collection('parrots');
    const age = parseInt(process.argv[2]);
    parrots.find({
        age: {
            $gt: age
        }
    }).toArray((err, docs) => {
        if (err) {
            console.error('Error finding docs:', err);
            throw err;
        }

        console.log(docs);
    });
    
    db.close();
});