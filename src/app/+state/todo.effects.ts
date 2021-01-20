import { Injectable }                            from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@datorama/akita-ng-effects';
import { TodoActions }                           from './todo.actions';
import { map, switchMap }                        from 'rxjs/operators';
import { TodoService }                           from './todo.service';
import { TodoStore }                             from './todo.store';
import { SnackbarService }                       from '../snackbar/snackbar.service';
import { SnackbarActions }                       from '../snackbar/snackbar.actions';

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

  @Effect({ dispatch: true })
  addTodo$ = this.actions$.pipe(
    ofType(TodoActions.addTodo),
    map(({ todo }) => {
      this.todoStore.add(todo);
      return SnackbarActions.showSnackbar({ todo });
    }),
  );
}
