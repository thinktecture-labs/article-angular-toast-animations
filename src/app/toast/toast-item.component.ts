import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Toast} from './toast';

@Component({
  selector: 'labs-toast-item',
  templateUrl: 'toast-item.component.html',
  styleUrls: ['toast-item.component.scss'],
})
export class ToastItemComponent {
  @Input()
  toast: Toast;
}
