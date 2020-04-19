import {NgModule} from '@angular/core';
import {ToastComponent} from './toast.component';
import {CommonModule} from '@angular/common';
import {ToastItemComponent} from './toast-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [ToastComponent, ToastItemComponent],
  exports: [ToastComponent, ToastItemComponent],
})
export class ToastModule {

}
