import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'detail-element',
  styleUrl: 'detail-element.scss',
})
export class DetailElement {
  @Prop() initialState: 'open' | 'closed' = 'closed';
  @Prop() label: string;

  render() {
    return (
      <Host>
        <details open={this.initialState == 'open' ? true : false}>
          <summary>
            <h1>{this.label}</h1>
          </summary>
          <div>
            <slot></slot>
          </div>
        </details>
      </Host>
    );
  }
}
