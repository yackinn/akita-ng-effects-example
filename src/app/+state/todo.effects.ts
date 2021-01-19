import { Injectable }                            from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@datorama/akita-ng-effects';
import { TodoActions }                           from './todo.actions';
import { map, switchMap }                        from 'rxjs/operators';
import { TodoService }                           from './todo.service';
import { TodoStore }                             from './todo.store';
import { SnackbarService }                       from '../snackbar/snackbar.service';

@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private todoStore: TodoStore,
    private snackbarService: SnackbarService
  ) {
  }

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.loadTodos),
    switchMap(_ => this.todoService.get())
  ));

  @Effect()
  addTodo$ = this.actions$.pipe(
    ofType(TodoActions.addTodo),
    map(({todo}) => {
      this.todoStore.add(todo)
      this.snackbarService.showSnackbar(todo)
    }),
  )

  @Effect()
  addTodoSuccess$ = this.actions$.pipe(
    ofType(TodoActions.addTodoSuccess),
    map(({ todo }) => this.snackbarService.showSnackbar(todo))
  );
}
