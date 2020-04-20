import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ToastService} from './toast.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {triggerChildAnimation} from '../animations/trigger-child.animation';
import {verticalCollapseAnimation} from '../animations/vertical-collapse.animation';

@Component({
  selector: 'labs-toast',
  templateUrl: 'toast.component.html',
  styleUrls: ['toast.component.scss'],
  animations: [
    trigger('slideIn', [
      state('*', style({
        transform: 'translateY(0) scale(1) rotateY(0)',
        opacity: 1,
        filter: 'blur(0) saturate(100%)'
      })),
      state('void', style({
        transform: 'translateY(20px) scale(1.1) rotateY(5deg)',
        opacity: 0,
        filter: 'blur(2px) saturate(50%)'
      })),
      transition('void => *',  animate('.3s ease-in-out')),
    ]),
    trigger('slideOut', [
      state('*', style({
        transform: 'translateX(0)  scale(1)',
        opacity: 1,
      })),
      state('void', style({
        transform: 'translateX(100%) scale(.7)',
        opacity: 0,
      })),
      transition('* => void', animate('.2s ease')),
    ]),
    verticalCollapseAnimation,
    triggerChildAnimation,
  ],
})
export class ToastComponent {
  constructor(public toastService: ToastService) {
  }
}
