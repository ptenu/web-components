import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'money-input',
  styleUrl: 'money-input.scss',
})
export class MoneyInput {
  @Prop() name: string = 'amount';
  @Prop({ mutable: true, reflect: true }) value: string = '5';
  @Prop() min: number = 0;
  @Prop() max: number = 10;
  @Prop() step: number = 1;

  @Event() changed: EventEmitter<string>;

  formattedValue() {
    let amount = this.value.split('.');

    if (amount[1]) {
      while (amount[1].length < 2) {
        amount[1] = amount[1] + '0';
      }
    } else {
      amount[1] = '00';
    }

    return `£${amount[0]}.${amount[1]}`;
  }

  handleInput(event) {
    this.value = event.target.value;
    this.changed.emit(this.value);
  }

  render() {
    return (
      <Host>
        <p>{this.formattedValue()}</p>
        <input name={this.name} type="range" min={this.min} max={this.max} step={this.step} onInput={this.handleInput.bind(this)} value={this.value}></input>
      </Host>
    );
  }
}
