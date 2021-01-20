import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { TodoEffects }          from './+state/todo.effects';
import { HttpClientModule }     from '@angular/common/http';
import { FormsModule }          from '@angular/forms';
import { AkitaNgDevtools }      from '@datorama/akita-ngdevtools';
import { SnackbarComponent }    from './snackbar/snackbar.component';
import { SnackbarEffects }      from './snackbar/snackbar.effects';

@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AkitaNgEffectsModule.forRoot([TodoEffects, SnackbarEffects]),
    HttpClientModule,
    FormsModule,
    AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
