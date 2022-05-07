import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'nav-link',
  styleUrl: 'nav-link.scss',
})
export class PtuLink {
  @Prop() target: string;

  render() {
    return (
      <Host>
        <a href={this.target}>
          <slot></slot>
        </a>
      </Host>
    );
  }
}
