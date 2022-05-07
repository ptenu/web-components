import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'button-control',
  styleUrl: 'button-control.scss',
})
export class ButtonControl {
  @Prop() label: string;
  @Prop() aside: string;
  @Prop() tight: boolean;
  @Prop({ mutable: true }) theme: 'default' | 'blue' | 'primary' | 'sand' | 'green' | 'red' | 'light' | 'yellow' = 'default';
  @Prop({ mutable: true }) variant: 'filled' | 'link' | 'outline' = 'filled';

  @Element() el: HTMLElement;

  tightClass() {
    if (this.tight) {
      return ' tight';
    }

    return '';
  }

  render() {
    return (
      <button class={this.theme + ' ' + this.variant + this.tightClass()}>
        {this.label && <header>{this.label}</header>}
        {this.aside && <aside>{this.aside}</aside>}
        {this.el.innerHTML != '' && (
          <div>
            <slot></slot>
          </div>
        )}
      </button>
    );
  }
}
