import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ToastModule} from './toast/toast.module';
import {WavesComponent} from './waves/waves.component';
import {ToastService} from './toast/toast.service';
import {of} from 'rxjs';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

@NgModule({
  declarations: [
    AppComponent,
    WavesComponent,
  ],
  imports: [
    BrowserModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(toastService: ToastService) {
    let i = 0;
    const items = [{title: `Toast ${i++}`}, {title: `Toast ${i++}`}, {title: `Toast ${i++}`}, {title: `Toast ${i++}`}, {title: `Toast ${i++}`}];
    toastService.items$ = of(items);
    setInterval(() => {
      items.push({title: `Toast ${i++}`});
    }, getRandomIntInclusive(0.5, 1) * 1000);
    setInterval(() => {
      items.splice(0, 1);
    }, getRandomIntInclusive(2, 2.5) * 1000);
  }
}
