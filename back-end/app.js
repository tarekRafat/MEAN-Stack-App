const express = require("express");
const app = express();
const router = require("./routes/routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);

const connectionString =
  "mongodb+srv://todo-app:atlas01020@cluster0.hxlvl.mongodb.net";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

console.log(process.env.NODE_ENV !== "test");
if (process.env.NODE_ENV !== "test") {
  mongoose.connect(connectionString, options).then(
    () => {
      console.log("Database connection established!");
    },
    err => {
      {
        console.log("Error connecting Database instance due to:", err);
      }
    }
  );
}

app.use(bodyParser.json());
app.use("/", router);
// app.use((err, req, res) => {
//   console.log(err);
// });

module.exports = app;
