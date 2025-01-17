import { Component, h, State } from '@stencil/core';

/**
 * Composite
 *
 * A place to try different combinations of states.
 */
@Component({
    tag: 'limel-example-button-composite',
    shadow: true,
    styleUrl: 'button-composite.scss',
})
export class ButtonCompositeExample {
    @State()
    private props = {
        label: 'My button',
        primary: true,
        outlined: false,
        icon: null,
        disabled: false,
        loading: false,
    };

    private eventPrinter: HTMLLimelExampleEventPrinterElement;

    constructor() {
        this.handleEvent = this.handleEvent.bind(this);
    }

    public render() {
        return [
            <limel-button {...this.props} onClick={this.handleEvent} />,
            <limel-flex-container justify="end">
                {this.renderControls()}
            </limel-flex-container>,
            <limel-example-event-printer
                ref={(el) => (this.eventPrinter = el)}
            />,
        ];
    }

    private handleEvent(event: Event) {
        this.eventPrinter.writeEvent(event);
    }

    private renderControls() {
        const controls = [
            {
                property: 'label',
                label: 'Label',
                value: 'My button',
            },
            {
                property: 'primary',
                label: 'Primary',
                value: true,
            },
            {
                property: 'outlined',
                label: 'Outlined',
                value: true,
            },
            {
                property: 'icon',
                label: 'Icon',
                value: 'filled_message',
            },
            {
                property: 'disabled',
                label: 'Disabled',
                value: true,
            },
            {
                property: 'loading',
                label: 'Loading',
                value: true,
            },
        ];

        return controls.map((control) => {
            return (
                <limel-switch
                    label={control.label}
                    value={!!this.props[control.property]}
                    onChange={this.handleChange(control)}
                />
            );
        });
    }

    private handleChange = (control) => (event: CustomEvent) => {
        this.props = {
            ...this.props,
            ...{
                [control.property]: (event.detail && control.value) || null,
            },
        };
    };
}
