const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://akash:DHeZzBSAww3bfud2@cluster0.dm9udsz.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
