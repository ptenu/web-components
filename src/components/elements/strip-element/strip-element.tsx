import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'strip-element',
  styleUrl: 'strip-element.css',
  shadow: true,
})
export class StripElement {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
