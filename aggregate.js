const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, (err, db) => {
    if (err) throw err;

    db.collection('prices').aggregate([{ 
        $match: { size: process.argv[2] } 
    }, {
        $group: {
            _id: 'average',
            average: {
                $avg: '$price'
            }
        }
    }]).toArray((err, results) => {
        if (err) throw err;
        console.log(results[0].average.toFixed(2));
    });

    db.close();
});