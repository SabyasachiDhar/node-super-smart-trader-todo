// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongo db server!!");
    }
    console.log("Connected to mongodb server!!");

    // db.collection('Todo').findOneAndUpdate({_id: new ObjectID("5be99b58fe277007e7a923d1")},{
    //         $set: {
    //             tableHolding: false
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });
    
    db.collection('Users').findOneAndUpdate({_id: new ObjectID("5be9acc9db87cc09b7bd3db7")},{
        $set: {
            tableHolding: false
        },
        $inc: {
            holdingAmt: 3000
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    // db.close();
});