import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'footer-container',
  styleUrl: 'footer-container.scss',
})
export class FooterContainer {
  render() {
    return (
      <Host>
        <footer>
          <slot></slot>
        </footer>
        <slot name="address"></slot>
      </Host>
    );
  }
}
