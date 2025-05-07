/**
 * Copyright 2025 NoahC570
 * * @license Apache-2.0, see LICENSE for full text.
 */

import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class ProjectCard extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "project-card";
  }

  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.link = "";
    this.link2 = "";
    this.image = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
      link: { type: String },
      link2: { type: String },
      image: { type: String },
    };
  }
  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          padding: var(--ddd-spacing-6);
          margin: var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-lg);
          max-width: 1200px;
          align-items: center;
          justify-content: center;
        }
        a {
          color: var(--ddd-theme-default-beaverBlue);
          font-weight: var(--ddd-font-weight-bold);
          text-decoration: none;
        }
        h3 {
          margin: var(--ddd-spacing-0);
          font-size: var(--ddd-spacing-6);
        }
        img {
          width: 500px;
          height: 300px;
          height: auto;
          border-radius: var(--ddd-radius-sm);
          border: 4px solid var(--ddd-theme-primary);
          object-fit: cover;
        }
        .project-content {
          padding: var(--ddd-spacing-19);
          display: flex;
          gap: var(---ddd-spacing-4);
          align-items: center;
          justify-content: center;
        }
        .text-project-content {
          flex: 1;
        }
        p {
          margin: var(--ddd-spacing-4);
        }
        @media (max-width: 768px) {
          img,
          .project-content,
          .text-project-content {
            display: flex;
            flex-direction: column;
          }
        }
        @media (max-width: 425px) {
          img,
          .project-content,
          .text-project-content {
            display: flex;
            flex-direction: column;
          }
        }
        @media (max-width: 375px) {
          img,
          .project-content,
          .text-project-content {
            display: flex;
            flex-direction: column;
          }
        }
        @media (max-width: 320px) {
          img,
          .project-content,
          .text-project-content {
            display: flex;
            flex-direction: column;
          }
        }
      `,
    ];
  }

  // Lit render the HTML
  // <div class="wrapper">
  // <h3><span>${this.t.title}:</span> ${this.title}</h3>
  //  <slot></slot>
  // </div>`;
  render() {
    return html`
      <div class="project-content">
        <img src="${this.image}" alt="Project Preview" />
        <div class="text-project-content">
          <h3>${this.title}</h3>
          <p>${this.description}</p>
          <ul>
            ${this.link
              ? html`<li>
                  <a href="${this.link}" target="_blank"
                    >View Project on Vercel</a
                  >
                </li>`
              : ""}
            ${this.link2
              ? html`<li>
                  <a href="${this.link2}" target="_blank">Access GitHub</a>
                </li>`
              : ""}
          </ul>
        </div>
      </div>
    `;
  }
}

/**
 * haxProperties integration via file reference
 */

globalThis.customElements.define(ProjectCard.tag, ProjectCard);
