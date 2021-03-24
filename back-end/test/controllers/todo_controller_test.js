const assert = require("assert");
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");

const Todo = mongoose.model("todo");

describe("Todo controller", () => {
  it("Post to /todoLists creates a new todoList", done => {
    Todo.countDocuments().then(count => {
      request(app)
        .post("/todoLists")
        .send({
          discription: "tarek.abdulbary@yahoo.com",
          todo_responsible: "Tarek",
          priority: "high",
        })
        .end(() => {
          Todo.countDocuments().then(newCount => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });
  });
});
