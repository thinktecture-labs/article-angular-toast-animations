import {ToastComponent} from './toast.component';
import {button, withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata} from '@storybook/angular';
import {ToastService} from './toast.service';
import {of} from 'rxjs';
import {ToastModule} from './toast.module';

const items = [];

export default {
  title: 'Core | Toast / List',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [ToastModule],
      providers: [
        {
          provide: ToastService, useFactory: () => ({
            items$: of(items),
          }),
        },
      ],
    }),
  ],
};


export const Default = () => ({
  component: ToastComponent,
  props: {
    create: button('Create toast', () => {
      items.push({title: `Item Title ${items.length}`});
    }),
  },
});
