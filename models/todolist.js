const mongoose = require('mongoose');

const todolistSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category: {
        type: String
    },
    date: {
        type: Date
    }
});

const Todolist = mongoose.model('Todolist', todolistSchema);

module.exports = Todolist;