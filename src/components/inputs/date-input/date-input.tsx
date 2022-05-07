import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'date-input',
  styleUrl: 'date-input.scss',
})
export class DateInput {
  @Prop() required: boolean = false;
  @Prop() name: string = 'date';
  @Prop() initialValue: string;

  @Prop({ mutable: true, reflect: true }) value: string;
  @State() date: Date = new Date();

  @Event() changed: EventEmitter<string>;

  updateDate(event: CustomEvent, type: 'month' | 'day' | 'year') {
    let newDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
    let value = event.detail;
    if (value == null) {
      return;
    }
    if (type == 'day') {
      if (value < 1 || value > 31) {
        return;
      }
      newDate.setDate(value);
    }
    if (type == 'month') {
      if (value < 1 || value > 12) {
        return;
      }
      newDate.setMonth(value - 1);
    }
    if (type == 'year') {
      if (value < 1930 || value > 2100) {
        return;
      }
      newDate.setFullYear(value);
    }

    this.date = newDate;
    this.value = newDate.toISOString();
  }

  componentWillLoad() {}

  render() {
    return (
      <Host>
        <text-input name={this.name + '__day'} hint="Day" width={8} type="number" required={this.required} onChanged={e => this.updateDate(e, 'day')}></text-input>
        <text-input name={this.name + '__month'} hint="Month" width={8} type="number" required={this.required} onChanged={e => this.updateDate(e, 'month')}></text-input>
        <text-input name={this.name + '__year'} hint="Year" width={12} type="number" required={this.required} onChanged={e => this.updateDate(e, 'year')}></text-input>
      </Host>
    );
  }
}
