import { Option } from '@limetech/lime-elements';
import { Component, h, State } from '@stencil/core';

/**
 * Select multiple values
 */
@Component({
    shadow: true,
    tag: 'limel-example-select-multiple',
})
export class SelectMultipleExample {
    @State()
    public value: Option[] = [];

    @State()
    public disabled = false;

    @State()
    public required = false;

    private options: Option[] = [
        { text: 'Luke Skywalker', value: 'luke' },
        { text: 'Han Solo', value: 'han' },
        { text: 'Leia Organo', value: 'leia' },
    ];

    constructor() {
        this.onChange = this.onChange.bind(this);
        this.toggleEnabled = this.toggleEnabled.bind(this);
        this.toggleRequired = this.toggleRequired.bind(this);
    }

    public render() {
        return (
            <section>
                <limel-select
                    label="Favorite heroes"
                    value={this.value}
                    options={this.options}
                    disabled={this.disabled}
                    required={this.required}
                    onChange={this.onChange}
                    multiple={true}
                />
                <p>
                    <limel-flex-container justify="end">
                        <limel-checkbox
                            label="Disabled"
                            onChange={this.toggleEnabled}
                            checked={this.disabled}
                        />
                        <limel-checkbox
                            label="Required"
                            onChange={this.toggleRequired}
                            checked={this.required}
                        />
                    </limel-flex-container>
                </p>
                <limel-example-value value={this.value} />
            </section>
        );
    }

    private onChange(event: CustomEvent<Option[]>) {
        this.value = event.detail;
    }

    private toggleEnabled() {
        this.disabled = !this.disabled;
    }

    private toggleRequired() {
        this.required = !this.required;
    }
}
