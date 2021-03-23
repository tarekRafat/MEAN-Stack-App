const express = require("express");
const router = express.Router();
const todo_controller = require("../controllers/todo_controller");

router.get("/todoList", todo_controller.getTodos);
router.get("/todoList/todo/:id", todo_controller.getTodo);
router.post("/todoList/add", todo_controller.create);
router.put("/todoList/update/:id", todo_controller.update);
router.delete("/todoList/delete/:id", todo_controller.delete);

module.exports = router;
