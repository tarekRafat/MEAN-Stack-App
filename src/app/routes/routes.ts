import { Routes } from "@angular/router";
import { CreateTodoComponent } from "../create-todo/create-todo.component";
import { TodoListComponent } from "../todo-list/todo-list.component";

export const routes: Routes = [
  { path: "", component: TodoListComponent },
  { path: "create", component: CreateTodoComponent },
];
