import {Button, ButtonModule} from 'primeng/button';
import {action} from '@storybook/addon-actions';
import {Dropdown, DropdownModule} from 'primeng';
import {moduleMetadata} from '@storybook/angular';

export default {
  title: 'Prime NG',
  decorators: [moduleMetadata({
    imports: [DropdownModule]
  })]
};
export const FormField = () => ({
 component: Button,
  props: {
   text: 'Welcome',
    onClick: action('Hi'),
    label: 'Prime NG Button',
    styleClass: '.ui-button-success',
    icon: 'pi pi-check',
    iconPos: 'left'
  }
});
