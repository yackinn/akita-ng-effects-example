import { Injectable }                from '@angular/core';
import { BehaviorSubject }           from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { Todo }                      from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService  {
  snackbar$ = new BehaviorSubject<{show: boolean, todo: Todo}>({
    show: false,
    todo: {
      userId: null,
      title: "",
      id: null,
      completed: false
    }
  })

  constructor() {
    this.snackbar$.pipe(
      filter(val => val.show),
      debounceTime(4000),
      map(val => {
        this.snackbar$.next({show: false, todo: val.todo})
      })
    ).subscribe()
  }

  showSnackbar(todo: Todo) {
    this.snackbar$.next({show: true, todo})
  }

}
