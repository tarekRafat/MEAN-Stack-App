import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-todo",
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.css"],
})
export class CreateTodoComponent implements OnInit {
  create: boolean;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "my-auth-token",
    }),
  };
  constructor(private http: HttpClient) {}
  createTodo(formProps) {
    this.http.post(
      "http://localhost:3080/todoLists",
      formProps,
      this.httpOptions
    );
  }
  validate(input: any) {
    if (input.valid && input.touched) [];
  }
  ngOnInit() {}
}
