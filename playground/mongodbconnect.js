const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongo db server!!");
    }
    console.log("Connected to mongodb server!!");

    db.collection('Todo').insertOne({
        name: 'Wakhanada mining',
        holding: 1000,
        cost: 10,
        price: 40.2,
        change: 0.00
    }, (err, result) => {
        if(err){
            return console.log("Unable to inssert in Database");
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Sachi',
        tableNo: 6,
        holdingAmt: 10000,
        location: 'Banerghata',
        tableHolding: true
    }, (err, result) => {
        if(err){
            return console.log("Unable to insert user in Database::::", err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});