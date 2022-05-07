import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'postcode-input',
  styleUrl: 'postcode-input.scss',
})
export class PostcodeInput {
  @Prop() name: string = 'postcode';
  @Prop() initialValue: string;

  @Prop({ mutable: true, reflect: true }) value: string;

  updateValue(value: string, type: 'outcode' | 'incode') {
    if (type == 'outcode' && value.length >= 3) {
      let nextInput = document.querySelector(`#${this.name}__incode`) as HTMLElement;
      nextInput.focus();
    }

    let current: Array<string>;
    let currentObj = { outcode: '', incode: '' };
    if (this.value != null) {
      current = this.value.split(' ');
      currentObj = { outcode: current[0], incode: current[1] };
    }

    let newObj = Object.create(currentObj);
    newObj[type] = value.toUpperCase().trim();
    this.value = newObj.outcode + ' ' + newObj.incode;
  }

  render() {
    return (
      <Host>
        <text-input name={this.name + '__outcode'} width={9} value={this.value} onChanged={e => this.updateValue(e.detail, 'outcode')}></text-input>
        <text-input name={this.name + '__incode'} width={8} value={this.value} onChanged={e => this.updateValue(e.detail, 'incode')}></text-input>
      </Host>
    );
  }
}