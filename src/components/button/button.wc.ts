import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

export const ButtonVariants = {
  primary: "primary",
  secondary: "secondary",
  success: "success",
  error: "error",
};
export type ButtonVariant = keyof typeof ButtonVariants;

export const ButtonSizes = {
  small: "small",
  medium: "medium",
  large: "large",
};
export type ButtonSize = keyof typeof ButtonSizes;

@customElement("new-button")
export class Button extends LitElement {
  static tagName = "new-button";

  static styles = css`
    .my-button {
      position: relative;
      display: inline-flex;
      align-items: center;
      overflow: hidden;
    }

    .my-button:not(.my-button--disabled):hover {
      cursor: pointer;
    }

    .my-button:not(.my-button--disabled)::after {
      content: ""; /* Create a pseudo-element to overlay */
      position: absolute; /* Position the pseudo-element */
      top: 0;
      left: 0;
      width: 100%; /* Cover the entire parent element */
      height: 100%;
    }

    .my-button:not(.my-button--disabled):hover::after {
      background-color: rgba(0, 0, 0, 0.15); /* set 15% black overlay */
    }

    .my-button:not(.my-button--disabled):active::after {
      background-color: rgba(0, 0, 0, 0.25); /* set 25% black overlay */
    }

    .my-button:not(.my-button--disabled):focus::after {
      background-color: rgba(0, 0, 0, 0.25); /* set 25% black overlay */
    }

    .my-button__primary {
      background-color: #736d9d;
      color: #fff;
    }

    .my-button__secondary {
      background-color: #d5d3e2;
      color: #000;
    }

    .my-button__success {
      background-color: #49b77d;
      color: #fff;
    }

    .my-button__error {
      background-color: #ff4343;
      color: #fff;
    }

    .my-button__small {
      height: 32px;
      padding: 0 32px;
      font-size: 11px;
    }

    .my-button__medium {
      height: 48px;
      padding: 0 48px;
      font-size: 12px;
    }

    .my-button__large {
      height: 56px;
      padding: 0 65px;
      font-size: 16px;
    }

    .my-button--disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  `;

  @property({ type: Boolean })
  accessor disabled = false;

  @property()
  accessor variant: ButtonVariant = "primary";

  @property()
  accessor size: ButtonSize = "small";

  @property()
  accessor rounded = "4px";

  clickListener(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener("click", this.clickListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.removeEventListener("click", this.clickListener);
  }

  render() {
    return html`
      <div
        tabindex="0"
        class=${classMap({
          "my-button": true,
          [`my-button__${this.variant}`]: this.variant,
          [`my-button__${this.size}`]: this.size,
          "my-button--disabled": this.disabled,
        })}
        style=${styleMap({ borderRadius: this.rounded })}
      >
        <slot>Thank you</slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "new-button": Button;
  }
}
