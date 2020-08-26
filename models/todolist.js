const mongoose = require('mongoose');

// Schema to define what and which type of data will be stored in the database
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