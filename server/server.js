var express = require('express');
var bodyParser = require('body-parser')

var { mongoose } = require('./db/mongoose');
var { SuperSmartTraderUserTable } = require('./models/superSmartTradeUserModel');
var { SuperSmartTraderMainTable } = require('./models/superSmartTradeModel');

var app = express();

app.use(bodyParser.json());

app.post('/superSmartTraderMainTable', (req, res) => {
    var newSuperSmartTraderMainTable = new SuperSmartTraderMainTable({
        companyName: req.body.companyName,
        holding: req.body.holding,
        cost: req.body.cost,
        price: req.body.price,
        change: req.body.change,
        completed: req.body.completed
    });

    newSuperSmartTraderMainTable.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err)
    });
});

app.get('/getSuperSmartTraderMainTable', (req, res) =>{
    SuperSmartTraderMainTable.find().then((doc) => {
        res.send({doc});
    }, (err) => {
        res.status(400).send(err)
    });
});

app.post('/superSmartTradeUserTable', (req, res) => {
    var newSuperSmartTraderUserTable = new SuperSmartTraderUserTable({
        tableNo: req.body.tableNo,
        userName: req.body.userName,
        email: req.body.email,
        companyName: req.body.companyName,
        chashInHand: req.body.chashInHand,
        holding: req.body.holding,
        cost: req.body.cost,
        price: req.body.price,
        change: req.body.change,
        completed: req.body.completed
    });

    newSuperSmartTraderUserTable.save().then((doc) => {
        res.send(doc)
    }, (err) => {
        err.status(400).send(err);
    });
});


app.listen(3000, () => {
    console.log('Starting App....at port 3000');
});