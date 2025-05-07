/**
 * Copyright 2025 NoahC570
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PortfolioVeryTop extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-very-header";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }

        .your-banner {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--ddd-theme-default-nittanyNavy);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 100px;
          z-index: 9999;
        }

        .your-banner a {
          padding: var(--ddd-spacing-3);
          display: inline-block;
          margin: var(--ddd-spacing-3);
          background-color: var(--ddd-theme-default-slateGray);
          color: var(--ddd-theme-default-white);
          text-decoration: none;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="your-banner">
          <a href="#1">About</a>
          <a href="#2">Resume</a>
          <a href="#3">Projects</a>
          <a href="#4">Work Experience</a>
          <a href="#5">Contact</a>
        </div>
        <slot></slot>
      </div>
    `;
  }
}

globalThis.customElements.define(PortfolioVeryTop.tag, PortfolioVeryTop);
