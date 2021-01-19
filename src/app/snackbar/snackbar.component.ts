import { Component, OnInit } from '@angular/core';
import { SnackbarService }   from './snackbar.service';
import { Observable }        from 'rxjs';
import { Todo }              from '../todo.model';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  snackbar$: Observable<{show: boolean, todo: Todo}>

  constructor(
    private snackbarService: SnackbarService
  ) {
  }

  ngOnInit(): void {
    this.snackbar$ = this.snackbarService.snackbar$.asObservable()
  }

}
