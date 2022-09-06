const mongoose = require('mongoose');
const schema = mongoose.schema;
const Model = mongoose.model;

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
},{
    timestamps: true
});

module.exports = Model('Todo', todoSchema);