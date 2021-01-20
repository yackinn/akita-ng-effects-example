import { Injectable }                from '@angular/core';
import { BehaviorSubject }           from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService  {
  snackbar$ = new BehaviorSubject<{show: boolean, message: string}>({
    show: false,
    message: ""
  })

  constructor() {
    this.snackbar$.pipe(
      filter(val => val.show),
      debounceTime(4000),
      map(val => {
        this.snackbar$.next({show: false, message: val.message})
      })
    ).subscribe()
  }

  showSnackbar(message: string) {
    this.snackbar$.next({show: true, message})
  }

}
