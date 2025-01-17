import { Chip } from '@limetech/lime-elements';
import { Component, h, State } from '@stencil/core';

/**
 * Choice chip set
 *
 * Only one option can be selected at once. Kind of like radio-buttons, but the
 * user can deselect the chosen option too. Good as an alternative to using a
 * `select` when there are only a few options.
 */
@Component({
    tag: 'limel-example-chip-set-choice',
    shadow: true,
})
export class ChipSetChoiceExample {
    @State()
    private chips: Chip[] = [
        {
            id: 1,
            text: 'Lime',
            icon: 'citrus',
        },
        {
            id: 2,
            text: 'Apple',
            selected: true,
            icon: 'apple',
        },
        {
            id: 3,
            text: 'Banana',
            icon: 'banana',
        },
    ];

    @State()
    private disabled: boolean = false;

    constructor() {
        this.chipSetOnChange = this.chipSetOnChange.bind(this);
        this.setDisabled = this.setDisabled.bind(this);
    }

    public render() {
        return [
            <limel-chip-set
                disabled={this.disabled}
                type="choice"
                label="Thirst quencher with a twist of"
                onChange={this.chipSetOnChange}
                value={this.chips}
            />,
            <p>
                <limel-flex-container justify="end">
                    <limel-checkbox
                        label="Disabled"
                        onChange={this.setDisabled}
                        checked={this.disabled}
                    />
                </limel-flex-container>
            </p>,
        ];
    }

    private chipSetOnChange(event) {
        console.log(event.detail);
    }

    private setDisabled(event: CustomEvent<boolean>) {
        this.disabled = event.detail;
    }
}
