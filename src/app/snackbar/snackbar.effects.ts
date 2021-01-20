import { Injectable }                            from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@datorama/akita-ng-effects';
import { map, switchMap }  from 'rxjs/operators';
import { SnackbarService } from './snackbar.service';
import { SnackbarActions } from './snackbar.actions';

@Injectable()
export class SnackbarEffects {

  constructor(
    private actions$: Actions,
    private snackbarService: SnackbarService
  ) {
  }

  @Effect()
  showSnackbar$ = this.actions$.pipe(
    ofType(SnackbarActions.showSnackbar),
    map(({ todo }) => this.snackbarService.showSnackbar(todo))
  );
}
