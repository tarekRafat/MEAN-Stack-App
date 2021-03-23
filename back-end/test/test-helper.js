const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const conncetString =
  "mongodb+srv://todo_test:test@cluster0.9uzfl.mongodb.net/test";

before(done => {
  mongoose.connect(conncetString, options).then(
    () => {
      console.log("Test Env is working!");
    },
    err => {
      {
        console.log("Error connecting TEST Database instance due to:", err);
      }
    }
  );
  mongoose.connection
    .once("open", () => done())
    .on("error", err => {
      console.warn("Warninng", err);
    });
});

beforeEach(done => {
  const { todos } = mongoose.connection.collections;
  todos
    .drop()
    .then(() => done())
    .catch(() => done());
});
