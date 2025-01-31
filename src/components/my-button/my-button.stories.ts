export default {
  title: 'Components/MyButton',
  component: 'my-button',
  argTypes: {
    label: { control: 'text' },
    variant: { control: { type: 'select', options: ['primary', 'secondary'] } },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => `
  <my-button label="${args.label}" variant="${args.variant}" disabled="${args.disabled}"></my-button>
`;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  variant: 'primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  variant: 'secondary',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  variant: 'primary',
  disabled: true,
};
