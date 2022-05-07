import { Component, Host, h, State, Fragment, Prop } from '@stencil/core';

@Component({
  tag: 'alert-element',
  styleUrl: 'alert-element.scss',
})
export class AlertElement {
  @Prop() dismissable: boolean = true;
  @Prop() persistKey: string = null;
  @Prop() theme: 'info' | 'warning' | 'danger' | 'good' = 'info';
  @State() dismissed: boolean = false;

  componentWillLoad() {
    if (this.persistKey == null) {
      return;
    }
    if (localStorage.getItem(`DISMISS_${this.persistKey.toUpperCase()}`) !== null) {
      this.dismissed = true;
    }
  }

  dismiss() {
    this.dismissed = true;
    if (this.persistKey == null) {
      return;
    }

    localStorage.setItem(`DISMISS_${this.persistKey.toUpperCase()}`, '');
  }
  render() {
    return (
      <Host class={{ hide: this.dismissed, [this.theme]: true }}>
        <Fragment>
          <div>
            <slot></slot>
          </div>
          {this.dismissable && (
            <aside>
              <text-button onClick={this.dismiss.bind(this)}>Dismiss</text-button>
            </aside>
          )}
        </Fragment>
      </Host>
    );
  }
}
