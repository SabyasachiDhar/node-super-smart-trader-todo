// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongo db server!!");
    }
    console.log("Connected to mongodb server!!");

    //deleteMany
    // db.collection('Todo').deleteMany({name: "Armechadon Tehcnologies"}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne

    // db.collection('Todo').deleteOne({name: "Armechadon Tehcnologies"}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todo').findOneAndDelete({"completed" : true}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: "Sachi"}).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5beaceb8c127c8e1de2789c6")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
    // db.close();
});