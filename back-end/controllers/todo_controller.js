const Todo = require("../models/todo_model");
module.exports = {
  //finds all todolist in database
  getTodos: (req, res) => {
    Todo.find().then(data => {
      res.status(200).send(data);
    });
  },

  getTodo: (req, res) => {
    reqId = req.params.id;
    Todo.findById({ _id: reqId })
      .then(todo => {
        res.status(200).send(todo);
      })
      .catch(err => res.status(422).send({ err: err.message }));
  },

  create: (req, res) => {
    todoProps = req.body;
    Todo.create(todoProps)
      .then(todo => res.status(201).send())
      .catch(err => res.status(422).send({ err: err.message }));
  },

  edit: (req, res) => {
    reqId = req.params.id;
    let { discription, todo_responsible, priority } = req.body;
    let updateValues = {
      discription,
      todo_responsible,
      priority,
    };
    Todo.findOneAndUpdate({ _id: reqId }, updateValues)
      .then(() => Todo.findById({ _id: reqId }))
      .then(todo => {
        return res.status(204).send(todo);
      })
      .catch(err => res.status(422).send({ err: err.message }));
  },
  delete: (req, res) => {
    reqId = req.params.id;
    Todo.find({ _id: reqId })
      .deleteOne()
      .then(todo => {
        return res.status(204).send();
      })
      .catch(err => res.status(422).send({ error: err }));
  },
};
