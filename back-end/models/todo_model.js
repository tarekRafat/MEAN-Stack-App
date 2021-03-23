const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  discription: {
    type: String,
    required: true,
  },
  todo_responsible: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
});
const Todo = mongoose.model("todo", TodoSchema);
module.exports = Todo;
