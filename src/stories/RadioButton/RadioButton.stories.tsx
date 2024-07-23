import { Meta, StoryFn } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  description: '',
  checked: false,
  disabled: false,
  error: false,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
    ...Default.args,
    description: 'Description',
  };


export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};



export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
};