import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

export interface Option {
  name?: string;
  value?: string;
}

@Component({
  tag: 'toggle-input',
  styleUrl: 'toggle-input.scss',
})
export class ToggleInput {
  @Prop() label: string = 'Toggle';
  @Prop() name: string = 'toggle';
  @Prop() value: string;
  @Prop() single: boolean = false;
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;

  @Event() changed: EventEmitter<Option>;

  toggleState(event) {
    event.stopPropagation();
    this.checked = event.target.checked;
    const returnValue: Option = { name: this.name, value: this.value };
    this.changed.emit(returnValue);
  }

  render() {
    return (
      <Host>
        <input id={this.name + '__' + this.value} type={this.single ? 'radio' : 'checkbox'} name={this.name} value={this.value} onChange={this.toggleState.bind(this)} />
        <label htmlFor={this.name + '__' + this.value}>{this.label}</label>
      </Host>
    );
  }
}
