export default {
  title: "Components/YooInput",
  component: "yoo-input",
  argTypes: {
    inputName: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    isRequired: { control: "boolean" },
    condition: { control: "boolean" },
    trailingIcon: { control: "boolean" },
  },
};

const Template = (args) => `
  <div class"width: 500px">
    <yoo-input
      inputName="${args.inputName}"
      label="${args.label}"
      placeholder="${args.placeholder}"
      isRequired="${args.isRequired}"
      condition="${args.condition}"
      trailingIcon="${args.trailingIcon}"
    >
      <span slot="helperText">Helper Text</span>
      ${args.trailingIcon ? '<span slot="actions">🔍</span>' : ""}
    </yoo-input>
  <div>
`;

export const Default = Template.bind({});
Default.args = {
  inputName: "username",
  label: "Username",
  placeholder: "Enter your username",
  isRequired: false,
  condition: false,
  trailingIcon: false,
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  isRequired: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  condition: true,
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  ...Default.args,
  trailingIcon: true,
};
