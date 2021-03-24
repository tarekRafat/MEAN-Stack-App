const express = require("express");
const router = express.Router();
const todo_controller = require("../controllers/todo_controller");

router.get("/todoLists", todo_controller.getTodos);
router.get("/todoLists/:id", todo_controller.getTodo);
router.post("/todoLists", todo_controller.create);
router.put("/todoLists/:id", todo_controller.edit);
router.delete("/todoLists/:id", todo_controller.delete);

module.exports = router;
