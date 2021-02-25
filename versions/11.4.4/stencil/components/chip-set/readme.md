# limel-chip-set



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                                                                                                                                                                            | Type                              |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `disabled` | `disabled` | True if the chip set should be disabled                                                                                                                                                                                                                                                                                                                                                                                | `boolean`                         |
| `label`    | `label`    | Label to display for the input field when type is `input`                                                                                                                                                                                                                                                                                                                                                              | `string`                          |
| `required` | `required` | True if the control requires a value                                                                                                                                                                                                                                                                                                                                                                                   | `boolean`                         |
| `type`     | `type`     | Type of chip set  - `choice` renders a set of selectable chips where only one is selectable. The `removable` property is ignored - `filter` renders a set of selectable chips where all are selectable. The `icon` property is ignored - `input` renders a set of chips that can be used in conjunction with an input field  If no type is set, a basic set of chips without additional functionality will be rendered | `"choice" \| "filter" \| "input"` |
| `value`    | --         | List of chips for the set                                                                                                                                                                                                                                                                                                                                                                                              | `Chip[]`                          |


## Events

| Event      | Detail | Description                                           |
| ---------- | ------ | ----------------------------------------------------- |
| `change`   |        | Dispatched when a chip is selected/deselected         |
| `input`    |        | Dispatched when the input is changed for type `input` |
| `interact` |        | Dispatched when a chip is interacted with             |


## Methods

### `getEditMode() => boolean`

Used to find out whether the chip-set is in edit mode.

#### Returns

Type: `boolean`

`true` if the chip-set is in edit mode, `false` otherwise.

### `setFocus() => void`

Used to set focus to the chip-set input field.

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*