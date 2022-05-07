import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'pin-input',
  styleUrl: 'pin-input.scss',
})
export class PinInput {
  @Prop({ mutable: true, reflect: true }) value: string;
  @State() values = [];
  @State() output = '';

  @Event() changed: EventEmitter<string>;

  handleBackspace(event) {
    if (event.code != 'Backspace') {
      return;
    }
    event.preventDefault();
    event.target.value = '';

    let element_index = event.target.getAttribute('data-index');
    let prev_element = document.getElementById(`otc_${element_index - 1}`);
    if (prev_element != null) {
      prev_element.focus();
    }

    let vals = this.values;
    vals[element_index - 1] = event.target.value;
    this.values = vals;
    this.output = this.values.join('');
    this.value = this.output;
  }

  handleInput(event) {
    let vals = this.values;
    let index: number = parseInt(event.path[0].getAttribute('data-index'));
    let value: string = event.path[0].value;
    vals[index - 1] = value;
    this.values = vals;
    this.changed.emit(this.value);

    this.output = this.values.join('');
    this.value = this.output;

    let next_index: number = index + 1;
    if (value.length >= 1) {
      let next_element = document.getElementById(`otc_${next_index}`);
      if (next_element != null) {
        next_element.focus();
      }
    }
  }

  controls(length, startAt = 1) {
    let controls = [];

    for (let i = 0; i < length; i++) {
      controls.push(
        <input
          id={`otc_${i + startAt}`}
          data-index={i + startAt}
          placeholder="•"
          onInput={this.handleInput.bind(this)}
          onKeyDown={this.handleBackspace.bind(this)}
          autoComplete="off"
          type="number"
        />,
      );
    }

    return controls;
  }

  render() {
    return (
      <Host>
        <field-element label="One time code">
          <section class="code-container">
            <div>{this.controls(3)}</div>
            <div>{this.controls(3, 4)}</div>
          </section>
          <input name="otc" id="otc" hidden value={this.output}></input>
        </field-element>
      </Host>
    );
  }
}
