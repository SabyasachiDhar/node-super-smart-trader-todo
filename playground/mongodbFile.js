// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongo db server!!");
    }
    console.log("Connected to mongodb server!!");

    db.collection('Todo').find({_id: new ObjectID('5be99b58fe277007e7a923d1')}).toArray().then((docs) => {
        console.log("Todos:::");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch todos::", err);
    });

    db.collection('Todo').find().count().then((count) => {
        console.log(`Todos::Count:, ${count}`);
    }, (err) => {
        console.log("Unable to fetch todos::", err);
    });

    db.collection('Users').find({name: 'Sachi'}).toArray().then((docs) => {
        console.log("Find user name Sachi");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(`Unable to fetch User: ${err}`);
    });

    // db.close();
});