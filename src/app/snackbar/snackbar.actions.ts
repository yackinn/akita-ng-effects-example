import { createAction, props } from '@datorama/akita-ng-effects';
import { Todo }                from '../todo.model';

export namespace SnackbarActions {
  export const showSnackbar = createAction('[Todo] Add Todo Success', props<{todo: Todo}>())
}
