import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "yoo-input",
  styleUrl: "yoo-input.scss",
  shadow: false,
})
export class YooInput {
  @Prop() inputName: string;
  @Prop() label: string;
  @Prop() placeholder?: string;
  @Prop() isRequired: boolean = false;
  @Prop() condition: boolean = false;
  @Prop() trailingIcon: boolean = false;

  private get inputClass() {
    const classes = ["input"];

    if (this.condition) {
      classes.push("input-condition");
    }

    if (this.isRequired) {
      classes.push("input-required");
    }

    return classes.join(" ");
  }

  render() {
    return (
      <Host class={this.inputClass}>
        <div class="label-wrapper">
          <label htmlFor={this.inputName} class="label-medium">
            {this.label}
            {this.isRequired && <strong>*</strong>}
          </label>
          <slot name="helperText" />
        </div>
  
        <div class="field-wrapper">
          <div class="input-container">
            <input
              id={this.inputName}
              name={this.inputName}
              placeholder={this.placeholder}
              required={this.isRequired}
              disabled={this.condition}
            />
            {this.trailingIcon && (
              <span class="trailing-icon">
                <slot name="actions">
                  <span>🔍</span>
                </slot>
              </span>
            )}
          </div>
        </div>
  
        <slot />
      </Host>
    );
  }
  
}

