import { Component, Host, h, Element, State } from '@stencil/core';

@Component({
  tag: 'breadcrumb-list',
  styleUrl: 'breadcrumb-list.scss',
  shadow: true,
})
export class BreadcrumbList {
  @Element() el: HTMLElement;

  @State() children: Array<Element>;

  componentWillRender() {
    this.children = Array.from(this.el.children);
  }

  render() {
    return (
      <Host>
        {this.children.map(child => {
          return <nav-link target={child.getAttribute('href')}>{child.innerHTML}</nav-link>;
        })}
      </Host>
    );
  }
}
