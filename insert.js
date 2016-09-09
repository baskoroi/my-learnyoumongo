const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
    if (err) throw err;

    let collection = db.collection('docs');
    let firstName = process.argv[2];
    let lastName = process.argv[3]; 
    let data = { firstName, lastName };
    collection.insertOne(data).then((r) => { console.log(JSON.stringify(data)); });

    db.close();
});