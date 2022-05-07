import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'content-container',
  styleUrl: 'content-container.scss',
})
export class ContentContainer {
  @Element() el: HTMLElement;

  @Prop() colour: string;
  @Prop() bgColour: string;

  render() {
    return (
      <Host style={{ color: this.colour, backgroundColor: this.bgColour }}>
        <article>
          <slot></slot>
        </article>
      </Host>
    );
  }
}
