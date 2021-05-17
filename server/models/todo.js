const {Schema, model} = require('mongoose');

const todoSchema = new Schema({
    title: String,
    body: String
},{timestamps: true})


const Todo = model('Todo', todoSchema);

module.exports = Todo;

