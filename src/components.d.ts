/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SizeVariants, ThemePalette } from "./shared/theme/theme.types";
import { ButtonStyle } from "./components/yoo-button/yoo-button.types";
export { SizeVariants, ThemePalette } from "./shared/theme/theme.types";
export { ButtonStyle } from "./components/yoo-button/yoo-button.types";
export namespace Components {
    interface MyButton {
        "disabled": boolean;
        "label": string;
        "variant": 'primary' | 'secondary';
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface YooButton {
        "block": boolean;
        "color": ThemePalette;
        "disabled"?: boolean;
        "iconAnimation"?: any;
        "iconLeft"?: string | undefined;
        "iconRight"?: string | undefined;
        "label"?: string | undefined;
        "size": SizeVariants;
        "variant": ButtonStyle;
    }
    interface YooInput {
        "condition": boolean;
        "inputName": string;
        "isRequired": boolean;
        "label": string;
        "placeholder"?: string;
        "trailingIcon": boolean;
    }
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLYooButtonElement extends Components.YooButton, HTMLStencilElement {
    }
    var HTMLYooButtonElement: {
        prototype: HTMLYooButtonElement;
        new (): HTMLYooButtonElement;
    };
    interface HTMLYooInputElement extends Components.YooInput, HTMLStencilElement {
    }
    var HTMLYooInputElement: {
        prototype: HTMLYooInputElement;
        new (): HTMLYooInputElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-component": HTMLMyComponentElement;
        "yoo-button": HTMLYooButtonElement;
        "yoo-input": HTMLYooInputElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
        "disabled"?: boolean;
        "label"?: string;
        "variant"?: 'primary' | 'secondary';
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface YooButton {
        "block"?: boolean;
        "color"?: ThemePalette;
        "disabled"?: boolean;
        "iconAnimation"?: any;
        "iconLeft"?: string | undefined;
        "iconRight"?: string | undefined;
        "label"?: string | undefined;
        "size"?: SizeVariants;
        "variant"?: ButtonStyle;
    }
    interface YooInput {
        "condition"?: boolean;
        "inputName"?: string;
        "isRequired"?: boolean;
        "label"?: string;
        "placeholder"?: string;
        "trailingIcon"?: boolean;
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-component": MyComponent;
        "yoo-button": YooButton;
        "yoo-input": YooInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "yoo-button": LocalJSX.YooButton & JSXBase.HTMLAttributes<HTMLYooButtonElement>;
            "yoo-input": LocalJSX.YooInput & JSXBase.HTMLAttributes<HTMLYooInputElement>;
        }
    }
}
