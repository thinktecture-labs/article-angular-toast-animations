import {ToastItemComponent} from './toast-item.component';

export default {
  title: 'Core | Toast / Item',
};

export const Default = () => ({
  component: ToastItemComponent,
  props: {
    toast: {title: 'Title', description: 'Description'}
  }
});
