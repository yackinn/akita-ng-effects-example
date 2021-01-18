import { Injectable }           from '@angular/core';
import { QueryEntity }          from '@datorama/akita';
import { TodoState, TodoStore } from './todo.store';

@Injectable({ providedIn: 'root' })
export class TodoQuery extends QueryEntity<TodoState> {
  selectAll$ = this.selectAll();

  constructor(protected store: TodoStore) {
    super(store);
  }

}
