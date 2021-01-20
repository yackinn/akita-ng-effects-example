import { createAction, props } from '@datorama/akita-ng-effects';

export namespace SnackbarActions {
  export const showSnackbar = createAction('[Snackbar] Show Snackbar', props<{message: string}>())
}
