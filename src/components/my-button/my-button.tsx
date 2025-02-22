import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: false,
})
export class MyButton {
  @Prop() label: string = 'Clique aqui';
  @Prop() variant: 'primary' | 'secondary' = 'primary';
  @Prop() disabled: boolean = false;

  get buttonClass() {
    const baseClass = 'my-button';
    const variantClass = `my-button--${this.variant}`;
    const disabledClass = this.disabled ? 'my-button--disabled' : '';
    return `${baseClass} ${variantClass} ${disabledClass}`;
  }

  render() {
    return (
      <Host>
        <button class={this.buttonClass} disabled={this.disabled} part="button">
          {this.label}
        </button>
      </Host>
    );
  }
}
