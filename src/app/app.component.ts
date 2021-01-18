import { Component, OnInit } from '@angular/core';
import { TodoQuery }         from './+state/todo.query';
import { Actions }           from '@datorama/akita-ng-effects';
import { TodoActions }       from './+state/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentTodo = ""
  todos$ = this.todoQuery.selectAll$

  constructor(
    private todoQuery: TodoQuery,
    private actions$: Actions,
  ) {
  }

  ngOnInit() {
    this.actions$.dispatch(TodoActions.loadTodos())
  }

  addTodo() {
    const id = this.todoQuery.getCount() + 1
    this.actions$.dispatch(TodoActions.addTodo({
      todo: {
        userId: 1,
        id,
        title: this.currentTodo,
        completed: false
      }
    }))
  }
}
