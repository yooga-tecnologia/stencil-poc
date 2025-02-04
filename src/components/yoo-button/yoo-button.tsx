import { Component, Host, Prop, h } from "@stencil/core";

import { SizeVariants, ThemePalette } from "@theme/theme.types";

export type ButtonStyle = "regular" | "emphasis"| "stroke"| "plain";

@Component({
  tag: "yoo-button",
  styleUrl: "yoo-button.scss",
  shadow: false,
})
export class YooButton {

  // Base styles
  @Prop() size: SizeVariants = "medium";
  @Prop() color: ThemePalette = "primary";
  @Prop() variant: ButtonStyle = "regular";
  @Prop() block: boolean = false;

  // Structure
  @Prop() iconRight?: string | undefined = undefined;
  @Prop() iconLeft?: string | undefined = undefined;
  @Prop() iconAnimation?: any = undefined;

  // States
  @Prop() disabled?: boolean = false;

  get buttonClass() {
    const sizeClass = `button-${this.size}`;
    const variantClass = `button-${this.variant}`;
    const colorClass = `button-${this.color}`;
    const disabledClass = this.disabled ? "button-disabled" : "";

    return `${variantClass} ${sizeClass} ${colorClass} ${disabledClass}`;
  }

  render() {
    return (
      <Host>
        <button class={this.buttonClass} disabled={this.disabled} part="button">
          <slot />
        </button>
      </Host>
    );
  }
}
