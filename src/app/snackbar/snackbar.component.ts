import { Component, OnInit } from '@angular/core';
import { SnackbarService }   from './snackbar.service';
import { Observable }        from 'rxjs';


@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  snackbar$: Observable<{show: boolean, message: string}>

  constructor(
    private snackbarService: SnackbarService
  ) {
  }

  ngOnInit(): void {
    this.snackbar$ = this.snackbarService.snackbar$.asObservable()
  }

}
