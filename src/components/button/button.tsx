import { DOMAttributes } from "react";

// Type definition.
type ButtonVariant = "primary" | "secondary" | "success" | "error";

type ButtonSize = "small" | "medium" | "large";

interface MyButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  border?: string;
  rounded?: string;
  disabled?: boolean;
  children?: any;
}

type CustomElement<T> = Partial<T & DOMAttributes<T> & MyButtonProps>;

// Web component definition.
export class MyButton extends HTMLElement {
  variant: ButtonVariant;
  size: ButtonSize;
  border: string;
  rounded: string;
  disabled: boolean;

  constructor() {
    super();

    this.variant = "primary";
    this.size = "small";
    this.border = "none";
    this.rounded = "4px";
    this.disabled = false;
  }

  clickListener(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  // Invoked when the custom element is first connected to the document's DOM.
  connectedCallback() {
    // the Shadow DOM can only be accessed within the Web Component.
    const shadow = this.attachShadow({ mode: "closed" });
    const className = `my-button my-button__${this.variant} my-button__${
      this.size
    } ${this.disabled ? "my-button--disabled" : ""}`;

    shadow.innerHTML = `
      <style>
        .my-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          border: ${this.border};
          border-radius: ${this.rounded};
        }

        .my-button:not(.my-button--disabled):hover {
          cursor: pointer;
        }

        .my-button:not(.my-button--disabled):hover::after {
          content: ""; /* Create a pseudo-element to overlay */
          position: absolute; /* Position the pseudo-element */
          top: 0;
          left: 0;
          width: 100%; /* Cover the entire parent element */
          height: 100%;
          border-radius: ${this.rounded};
          background-color: rgba(0, 0, 0, 0.15); /* set 15% black overlay */
        }

        .my-button:not(.my-button--disabled):active::after {
          content: ""; /* Create a pseudo-element to overlay */
          position: absolute; /* Position the pseudo-element */
          top: 0;
          left: 0;
          width: 100%; /* Cover the entire parent element */
          height: 100%;
          border-radius: ${this.rounded};
          background-color: rgba(0, 0, 0, 0.25); /* set 25% black overlay */
        }

        .my-button:not(.my-button--disabled):focus::after {
          content: ""; /* Create a pseudo-element to overlay */
          position: absolute; /* Position the pseudo-element */
          top: 0;
          left: 0;
          width: 100%; /* Cover the entire parent element */
          height: 100%;
          border-radius: ${this.rounded};
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
      </style>
      <div tabindex="0" class="${className}">
        <slot>Thank you</slot>
      </div>
    `;

    this.addEventListener("click", this.clickListener);
  }

  // Invoked when the custom element is disconnected from the document's DOM.
  disconnectedCallback() {
    this.removeEventListener("click", this.clickListener);
  }

  // component attributes
  static get observedAttributes() {
    return ["variant", "size", "border", "rounded", "disabled"];
  }

  // Invoked when one of the custom element's attributes is added, removed, or changed.
  attributeChangedCallback(property: string, oldValue: any, newValue: any) {
    if (oldValue === newValue) return;

    if (property === "variant") {
      this.variant = newValue;
    }

    if (property === "size") {
      this.size = newValue;
    }

    if (property === "border") {
      this.border = newValue;
    }

    if (property === "rounded") {
      this.rounded = newValue;
    }

    if (property === "disabled") {
      this.disabled = newValue;
    }
  }
}

// Register the component as a web custom element.
customElements.define("my-button", MyButton);

// Allow Typescript to type check my-button component.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["my-button"]: CustomElement<MyButton>;
    }
  }
}
