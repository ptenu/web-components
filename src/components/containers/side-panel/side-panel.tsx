import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'side-panel',
  styleUrl: 'side-panel.scss',
})
export class SidePanel {
  @Prop() label: string;
  @Prop({ mutable: true, reflect: true, attribute: 'open' }) isOpen: boolean = false;
  @Prop() closable: boolean = true;

  close() {
    this.isOpen = false;
  }

  render() {
    return (
      <Host class={{ open: this.isOpen, closed: !this.isOpen }}>
        <article>
          <header>
            <h1>{this.label}</h1>
            {this.closable && <text-button onClick={this.close.bind(this)}>Close</text-button>}
          </header>
          <slot></slot>
        </article>
      </Host>
    );
  }
}
