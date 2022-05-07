import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'header-container',
  styleUrl: 'header-container.scss',
})
export class HeaderContainer {
  @Prop() serviceTitle: string;
  @Prop() logoSrc: string;
  @Prop() logoSmall: string;

  @State() menuOpen: boolean = false;

  render() {
    return (
      <Host>
        <article>
          <aside>
            {this.logoSrc && <img class="normal" src={this.logoSrc}></img>}
            {this.logoSmall && <img class="small" src={this.logoSmall}></img>}
          </aside>
          <header>{this.serviceTitle && <h1>{this.serviceTitle}</h1>}</header>
          <nav class={{ open: this.menuOpen }}>
            <button onClick={() => (this.menuOpen = !this.menuOpen)} class="menu-toggle">
              {this.menuOpen ? 'X' : '☰'}
            </button>
            <slot></slot>
          </nav>
        </article>
      </Host>
    );
  }
}
