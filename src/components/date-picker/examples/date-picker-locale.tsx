import { Component, h, State } from '@stencil/core';
import { Languages } from '@limetech/lime-elements';
import { Option } from '@limetech/lime-elements';

@Component({
    tag: 'limel-example-date-picker-locale',
    shadow: true,
})
export class DatePickerExample {
    @State()
    private value = new Date();

    @State()
    private locale: Option<Languages> = {text:'en', value:'en'};

    private locales: Option<Languages>[] = [{text:'da', value:'da'}, {text:'en', value:'en'}, {text:'fi', value:'fi'}, {text:'nb', value:'nb'}, {text:'no', value:'no'}, {text:'sv', value:'sv'}];

    constructor() {
        this.handleChange = this.handleChange.bind(this);
        this.onLocaleChange = this.onLocaleChange.bind(this);
    }

    public render() {
        return (
            <div>
                <limel-date-picker
                    type="datetime"
                    label="datetime"
                    value={this.value}
                    onChange={this.handleChange}
                    language={this.locale?.value}
                />
                <limel-select
                    label="Locale"
                    value={this.locale}
                    options={this.locales}
                    onChange={this.onLocaleChange}
                />
                <p style={{ 'font-size': 'small' }}>
                    Value:{' '}
                    <code>
                        {this.value
                            ? this.value.toString()
                            : JSON.stringify(this.value)}
                    </code>
                </p>
            </div>
        );
    }

    private handleChange(event) {
        this.value = event.detail;
    }

    private onLocaleChange(event: CustomEvent<Option<Languages>>) {
        this.locale = event.detail;
    }
}
