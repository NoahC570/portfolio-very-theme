/**
 * Copyright 2025 NoahC570
 *  * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
export class PortfolioVeryScreen extends DDDSuper(LitElement) {
  static get tag() {
    return "portfolio-very-screen";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          padding: var(--ddd-spacing-5);
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          overflow: hidden;
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
          padding-top: var(--ddd-spacing-2);
        }

        h3 span {
          font-size: var(--final-test-label-font-size, var(--ddd-font-size-s));
        }
        :host(.about) {
          background-color: var(--ddd-theme-default-beaverBlue);
          color: var(--ddd-theme-default-slateMaxLight);
        }
        :host(.resume) {
          background-color: var(--ddd-theme-default-beaver70);
          color: var(--ddd-theme-default-slateMaxLight);
        }
        :host(.projects) {
          background-color: var(--ddd-theme-default-beaver80);
          color: var(--ddd-theme-default-slateMaxLight);
        }
        :host(.work) {
          background-color: var(--ddd-theme-default-navy40);
          color: var(--ddd-theme-default-slateMaxLight);
        }
        :host(.contact) {
          background-color: var(--ddd-theme-default-navy60);
          color: var(--ddd-theme-default-slateMaxLight);
        }

        .contact-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-4);
        }

        .contact-info {
          font-size: var(--ddd-spacing-3);
          line-height: 1.8;
          text-align: left;
        }

        .contact-pic {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 4px solid var(--ddd-theme-primary);
          object-fit: cover;
        }
        h3 {
          padding: 0px 0px 0px;
        }
        @media (max-width: 768px) {
          .contact-wrapper,
          .contact-info,
          .contact-pic {
            display: flex;
            flex-direction: column;
          }
        }
        @media (max-width: 425px) {
          .contact-wrapper,
          .contact-info,
          .contact-pic {
            display: flex;
            flex-direction: column;
          }
        }
        @media (max-width: 375px) {
          .contact-wrapper,
          .contact-info,
          .contact-pic {
            display: flex;
            flex-direction: column;
          }
        }
        @media (max-width: 320px) {
          .contact-wrapper,
          .contact-info,
          .contact-pic {
            display: flex;
            flex-direction: column;
          }
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <h3>${this.title}</h3>
      <slot></slot>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
}

globalThis.customElements.define(PortfolioVeryScreen.tag, PortfolioVeryScreen);
