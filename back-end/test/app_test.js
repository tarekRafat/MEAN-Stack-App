const assert = require("assert");
const request = require("supertest");
const app = require("../app");
const Todo = require("../models/todo_model");

describe("test app requests", () => {
  it("should get http request to /todoLists", done => {
    request(app)
      .get("/todoLists")
      .send({
        discription: "first todo",
        todo_responsible: "Tarek Abdulbary",
        priority: "Highhh",
      })
      .end((err, response) => {
        assert(response.request._data.discription === "first todo");
        done();
      });
  });

  it("Put to /todoLists edits an existing Todo", done => {
    const todo = new Todo({
      discription: "todo dis",
      todo_responsible: "Tarek",
      priority: "Low",
    });
    todo.save().then(() => {
      request(app)
        .put(`/todoLists/${todo._id}`)
        .send({
          discription: "first todo",
          todo_responsible: "Tarek Abdulbary",
          priority: "High",
        })
        .end((err, response) => {
          assert(response.request._data.priority === "High");
          done();
        });
    });
  });

  it("Should delete to todoLists/delete remove an item", done => {
    const todo = new Todo({
      discription: "todo dis",
      todo_responsible: "Tarek",
      priority: "Low",
    });
    todo.save().then(() => {
      request(app)
        .delete(`/todoLists/${todo._id}`)
        .end(() => {
          Todo.findOne({
            discription: "todo dis",
            todo_responsible: "Tarek",
            priority: "Low",
          }).then(todo => {
            assert(todo === null);
            done();
          });
        });
    });
  });
});
