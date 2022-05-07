# text-input



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                               | Default     |
| -------------- | --------------- | ----------- | ---------------------------------- | ----------- |
| `autoComplete` | `auto-complete` |             | `string`                           | `'off'`     |
| `hint`         | `hint`          |             | `string`                           | `undefined` |
| `name`         | `name`          |             | `string`                           | `undefined` |
| `required`     | `required`      |             | `boolean`                          | `false`     |
| `type`         | `type`          |             | `"number" \| "password" \| "text"` | `'text'`    |
| `value`        | `value`         |             | `string`                           | `undefined` |
| `width`        | `width`         |             | `number`                           | `32`        |


## Events

| Event     | Description | Type                  |
| --------- | ----------- | --------------------- |
| `changed` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [date-input](../date-input)
 - [postcode-input](../postcode-input)

### Graph
```mermaid
graph TD;
  date-input --> text-input
  postcode-input --> text-input
  style text-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
