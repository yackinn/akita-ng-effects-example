import { Injectable }                            from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@datorama/akita-ng-effects';
import { TodoActions }         from './todo.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { TodoService }         from './todo.service';
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
    switchMap(() => this.todoService.get())
  ));

  @Effect({ dispatch: true })
  addTodo$ = this.actions$.pipe(
    ofType(TodoActions.addTodo),
    tap(({ todo }) => this.todoStore.add(todo)),
    map(({ todo }) => SnackbarActions.showSnackbar({ message: `Item has been added ${todo.title}` }))
  );
}
