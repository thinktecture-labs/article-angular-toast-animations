import {NgModule} from '@angular/core';
import {ToastComponent} from './toast.component';
import {CommonModule} from '@angular/common';
import {ToastItemComponent} from './toast-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ToastComponent, ToastItemComponent],
  exports: [ToastComponent, ToastItemComponent],
})
export class ToastModule {

}
