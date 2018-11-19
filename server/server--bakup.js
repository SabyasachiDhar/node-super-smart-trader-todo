var express = require('express');
var bodyParser = require('body-parser')

var { mongoos } = require('./db/mongoose');
var { SuperSmartTraderUserTable } = require('./models/superSmartTradeUserModel');
var { SuperSmartTraderMainTable } = require('./models/superSmartTradeModel');



var newSuperSmartTraderMainTable = new SuperSmartTraderMainTable({
    companyName: "Any name",
    holding: 2000,
    cost: 45.67,
    price: 10.23,
    change: 0.23,
    completed: true
})
newSuperSmartTraderMainTable.save().then((doc) => {
    console.log("Save Doc::", JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log("Unable", err);
});

var newSuperSmartTraderUserTable = new SuperSmartTraderUserTable({
    tableNo: 1,
    userName: 'Sachi',
    email: 'sadhar11@awd.com',
    companyName: 'Any company name',
    chashInHand: 20000,
    holding: 2000,
    cost: 45.67,
    price: 10.23,
    change: 0.23,
    completed: true
});

newSuperSmartTraderUserTable.save().then((doc) => {
    console.log("Save Doc", JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log("Unable to find connecction", err)
});
