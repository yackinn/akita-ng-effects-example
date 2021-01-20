import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    this.todoStore.setLoading();
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?userId=1').pipe(tap(entities => {
      this.todoStore.set(entities);
      this.todoStore.setLoading(false);
    }));
  }
}
