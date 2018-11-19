var mongoose = require('mongoose');

var SuperSmartTraderMainTable = mongoose.model('SuperSmartTraderMainTable', {
    companyName: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    holding: {
        type: Number,
        require: true,
        trim: true
    },
    cost: {
        type: Number,
        require: true,
        trim: true
    },
    price: {
        type: Number,
        require: true,
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

module.exports = {
    SuperSmartTraderMainTable
}