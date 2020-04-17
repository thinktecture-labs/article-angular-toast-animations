import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Toast} from './toast';

@Injectable({providedIn: 'root'})
export class ToastService {
  items$: Observable<Toast[]>;
}
