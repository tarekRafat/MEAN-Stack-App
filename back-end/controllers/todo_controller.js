const Todo = require("../models/todo_model");
module.exports = {
  //finds all todolist in database
  getTodos: (req, res) => {
    Todo.find().then(data => {
      res.send(data);
    });
  },

  getTodo: (req, res) => {
    reqId = req.params.id;
    Todo.findById({ _id: reqId })
      .then(todo => {
        res.send(todo);
      })
      .catch(err => res.status(422).send({ error: err }));
  },

  create: (req, res) => {
    todoProps = req.body;
    Todo.create(todoProps)
      .then(todo => res.send(todo))
      .catch(err => res.status(422).send({ err: err.message }));
  },

  update: (req, res) => {
    reqId = req.params.id;
    let { discription, todo_responsible, priority } = req.body;
    let updateValues = {
      discription,
      todo_responsible,
      priority,
    };
    Todo.findOneAndUpdate({ _id: reqId }, updateValues)
      .then(() => Todo.findById({ _id: reqId }))
      .then(todo => res.send(todo))
      .catch(err => res.status(422).send({ err: err.message }));
    // Todo.findOne({ _id: reqId })
    //   .update({ _id: reqId }, { updateValues })
    //   .then(updateData => {
    //     res.send(updateData);
    //   });
  },
  delete: (req, res) => {
    reqId = req.params.id;
    Todo.find({ _id: reqId })
      .deleteOne()
      .then(todo =>
        res.send({ deletedTodo: "Success", count: todo.deletedCount })
      )
      .catch(err => res.status(422).send({ error: err }));
  },
};
