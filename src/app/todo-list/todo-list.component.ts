import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  todos: any;
  constructor(http: HttpClient) {
    http.get("http://localhost:3080/todoLists").subscribe((data) => {
      this.todos = data;
    });
  }

  ngOnInit() {}
}
