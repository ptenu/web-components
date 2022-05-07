import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'strip-list',
  styleUrl: 'strip-list.scss',
})
export class StripList {
  @Prop() label: string;

  render() {
    return (
      <Host>
        <section>
          {this.label && (
            <header>
              <h1>{this.label}</h1>
              <nav>
                <slot name="buttons"></slot>
              </nav>
            </header>
          )}
          <ul class="strip-list">
            <slot></slot>
          </ul>
        </section>
      </Host>
    );
  }
}
