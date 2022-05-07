import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'details-list',
  styleUrl: 'details-list.scss',
})
export class DetailsList {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
