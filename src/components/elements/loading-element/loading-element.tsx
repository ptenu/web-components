import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'loading-element',
  styleUrl: 'loading-element.scss',
})
export class LoadingElement {
  render() {
    return <Host></Host>;
  }
}
