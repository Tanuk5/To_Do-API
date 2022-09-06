const mongoose = require('mongoose');
const schema = mongoose.schema;
const MOdel = mongoose.model;

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
},{
    timestamps: true
});

module.exports = Model('Todo', todoSchema);