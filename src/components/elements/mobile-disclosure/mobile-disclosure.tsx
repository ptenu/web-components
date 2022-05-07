import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'mobile-disclosure',
  styleUrl: 'mobile-disclosure.scss',
})
export class MobileDisclosure {
  @Prop() label: string;

  @State() isOpen: boolean = true;

  componentWillLoad() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 876) {
      this.isOpen = false;
    }
  }

  render() {
    return (
      <details open={this.isOpen}>
        <summary>{this.label}</summary>
        <div class="content">
          <slot></slot>
        </div>
      </details>
    );
  }
}
