import { moduleMetadata } from '@storybook/angular';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {linkTo} from "@storybook/addon-links";
export default {
  title: 'Dropdown',
  decorators: [moduleMetadata({
    imports: [DropdownModule, NoopAnimationsModule]
  })]
};
const cities1 = [
  {label: 'Select City', value: null},
  {label: 'India', value: {id: 1, name: 'New York', code: 'NY'}},
  {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
  {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
  {label: 'Chennai', value: {id: 4, name: 'Istanbul', code: 'IST'}},
  {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
];
export const dropdown = () => ({
  component: Dropdown,
  props: {
    options: cities1,
    styleClass: 'ui-dropdown-panel',
    name: 'Select City',
    placeholder: 'Select',
    autofocus: true,
    onClick: linkTo('Dropdown')
  }
});
dropdown.story = {
  name: 'Dropdown',
};
