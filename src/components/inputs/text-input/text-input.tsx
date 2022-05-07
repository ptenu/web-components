import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'text-input',
  styleUrl: 'text-input.scss',
})
export class TextInput {
  @Prop() width: number = 32;
  @Prop() type: 'text' | 'password' | 'number' = 'text';
  @Prop() autoComplete: string = 'off';
  @Prop() hint: string;
  @Prop() required: boolean = false;
  @Prop() name: string;

  @Prop({ mutable: true, reflect: true }) value: string;

  @Event() changed: EventEmitter<string>;

  handleInput(event) {
    this.value = event.target.value;
    this.changed.emit(this.value);
  }

  render() {
    return (
      <Host>
        <input
          id={this.name}
          name={this.name}
          type={this.type}
          style={{ width: `${this.width}ex` }}
          autocomplete={this.autoComplete}
          required={this.required}
          onInput={this.handleInput.bind(this)}
        />
        {this.hint && <p class="hint">{this.hint}</p>}
      </Host>
    );
  }
}
