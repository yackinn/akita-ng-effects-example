import { Injectable }                            from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@datorama/akita-ng-effects';
import { TodoActions }                           from './todo.actions';
import { map, switchMap }                        from 'rxjs/operators';
import { TodoService }                           from './todo.service';
import { TodoStore }                             from './todo.store';

@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private todoStore: TodoStore
  ) {
  }

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.loadTodos),
    switchMap(_ => this.todoService.get().pipe(
      map(todos => TodoActions.loadTodosSuccess({ todos }))
    ))
  ));

  @Effect({dispatch: false})
  loadTodosSuccess$ = this.actions$.pipe(
    ofType(TodoActions.loadTodosSuccess),
    map(({ todos }) => this.todoStore.set(todos))
  );

  @Effect({dispatch: false})
  addTodo$ = this.actions$.pipe(
    ofType(TodoActions.addTodo),
    map(({todo}) => this.todoStore.add(todo))
  )
}
