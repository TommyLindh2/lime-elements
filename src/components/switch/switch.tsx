import { MDCSwitch } from '@limetech/mdc-switch';
import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Prop,
    State,
    Watch,
} from '@stencil/core';
import { createRandomString } from '../../util/random-string';

/**
 * @exampleComponent limel-example-switch
 */
@Component({
    tag: 'limel-switch',
    shadow: true,
    styleUrl: 'switch.scss',
})
export class Switch {
    /**
     * Label to display next to the switch
     */
    @Prop({ reflect: true })
    public label: string;

    /**
     * Disables the switch when `true`. Works exactly the same as
     * `disabled`. If either property is `true`, the switch will be
     * disabled.
     */
    @Prop({ reflect: true })
    public disabled = false;

    /**
     * Disables the switch when `true`. Works exactly the same as
     * `disabled`. If either property is `true`, the switch will be
     * disabled.
     */
    @Prop({ reflect: true })
    public readonly = false;

    /**
     * The value of the switch
     */
    @Prop({ reflect: true })
    public value = false;

    /**
     * Emitted when the value has changed
     */
    @Event()
    private change: EventEmitter<boolean>;

    @Element()
    private host: HTMLLimelSwitchElement;

    @State()
    private fieldId = createRandomString();

    private mdcSwitch: MDCSwitch;

    public connectedCallback() {
        this.initialize();
    }

    public componentDidLoad() {
        this.initialize();
    }

    private initialize() {
        const element = this.host.shadowRoot.querySelector('.mdc-switch');
        if (!element) {
            return;
        }

        this.mdcSwitch = new MDCSwitch(element);
    }

    public disconnectedCallback() {
        this.mdcSwitch?.destroy();
    }

    public render() {
        return [
            <div
                class={{
                    'mdc-switch': true,
                    'mdc-switch--disabled': this.disabled || this.readonly,
                }}
            >
                <div class="mdc-switch__track" />
                <div class="mdc-switch__thumb-underlay">
                    <div class="mdc-switch__thumb">
                        <input
                            type="checkbox"
                            class="mdc-switch__native-control"
                            id={this.fieldId}
                            role="switch"
                            onChange={this.onChange}
                            disabled={this.disabled || this.readonly}
                            checked={this.value}
                        />
                    </div>
                </div>
            </div>,
            <label
                class={`${this.disabled || this.readonly ? 'disabled' : ''}`}
                htmlFor={this.fieldId}
            >
                <span class="label">{this.label}</span>
            </label>,
        ];
    }

    @Watch('value')
    protected valueWatcher(newValue, oldValue) {
        if (!this.mdcSwitch) {
            return;
        }

        if (newValue !== oldValue) {
            this.mdcSwitch.checked = newValue;
        }
    }

    private onChange = (event) => {
        event.stopPropagation();
        this.change.emit(event.target.checked);
    };
}
