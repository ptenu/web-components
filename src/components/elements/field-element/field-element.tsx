import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'field-element',
  styleUrl: 'field-element.scss',
})
export class FieldElement {
  @Prop() label: string;
  @Prop() useLabel: boolean = true;

  render() {
    if (this.useLabel) {
      return (
        <Host>
          <label>
            <h2 class="field-label">{this.label}</h2>
            <section>
              <slot></slot>
            </section>
          </label>
        </Host>
      );
    }

    return (
      <Host>
        <section>
          <h1 class="field-label">{this.label}</h1>
          <section>
            <slot></slot>
          </section>
        </section>
      </Host>
    );
  }
}
