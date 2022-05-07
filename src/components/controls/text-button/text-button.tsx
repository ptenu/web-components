import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'text-button',
  styleUrl: 'text-button.scss',
})
export class TextButton {
  @Prop() theme: 'default' | 'red' | 'yellow' | 'green' = 'default';
  render() {
    return (
      <Host>
        <button class={this.theme}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
