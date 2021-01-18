import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID }         from '@datorama/akita';
import { tap }        from 'rxjs/operators';
import { Todo }       from '../todo.model';
import { TodoStore }  from './todo.store';

@Injectable({ providedIn: 'root' })
export class TodoService {

  constructor(
    private todoStore: TodoStore,
    private http: HttpClient
  ) {
  }

  get() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?userId=1').pipe(tap(entities => {
      this.todoStore.set(entities);
    }));
  }

  // add(todo: Todo) {
  //   this.todoStore.add(todo);
  // }
  //
  // update(id: number, todo: Partial<Todo>) {
  //   this.todoStore.update(id, todo);
  // }
  //
  // remove(id: ID) {
  //   this.todoStore.remove(id);
  // }

}
