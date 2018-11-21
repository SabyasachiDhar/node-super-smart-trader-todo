var mongoose = require('mongoose');

var SuperSmartTraderUserTable = mongoose.model('SuperSmartTraderUserTable', {
    tableNo: {
        type: Number,
        require: true,
        minlength: 1
    },
    tableId:{
        type: String,
        trim: true,
        require: true
    },
    userName: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        minlength: 1
    },
    companyName: {
        type: String,
        minlength: 1,
        trim: true
    },
    chashInHand: {
        type: Number,
        trim: true,
        require: true,
        default: 35000
    },
    holding: {
        type: Number,
        trim: true
    },
    cost: {
        type: Number,
        trim: true
    },
    price: {
        type: Number,
        trim: true
    },
    change: {
        type: Number,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = { SuperSmartTraderUserTable }