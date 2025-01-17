import { MDCRipple } from '@limetech/mdc-ripple';
import { Component, Element, h, Method, Prop } from '@stencil/core';
import { IconSize } from '@limetech/lime-elements';

/**
 * @exampleComponent limel-example-icon-button-basic
 * @exampleComponent limel-example-icon-button-disabled
 * @exampleComponent limel-example-icon-button-elevated
 * @exampleComponent limel-example-icon-button-toggle-state
 * @exampleComponent limel-example-icon-button-composite
 */
@Component({
    tag: 'limel-icon-button',
    shadow: true,
    styleUrl: 'icon-button.scss',
})
export class IconButton {
    public constructor() {
        this.removeFocusedStyleOnClick = this.removeFocusedStyleOnClick.bind(
            this
        );
    }

    /**
     * The icon to display.
     */
    @Prop({ reflect: true })
    public icon: string;

    /**
     * Set to `true` to give the button our standard "elevated" look, lifting
     * it off the flat layout.
     */
    @Prop({ reflect: true })
    public elevated = false;

    /**
     * The text to show to screenreaders and other assistive tech.
     */
    @Prop({ reflect: true })
    public label: string;

    /**
     * Set to `true` to disable the button.
     */
    @Prop({ reflect: true })
    public disabled = false;

    @Element()
    private host: HTMLLimelIconButtonElement;

    private mdcIconButtonRipple;

    /**
     * If the button is hidden or inside another element that is animating
     * while the button is instantiated, the hover-highlight may become
     * misaligned. If so, calling this method will make the button re-layout
     * the highlight.
     */
    @Method()
    public async relayout() {
        if (this.mdcIconButtonRipple) {
            this.mdcIconButtonRipple.layout();
        }
    }

    private removeFocusedStyleOnClick() {
        const mdcButton = this.host.shadowRoot.querySelector(
            '.mdc-icon-button'
        );
        mdcButton.classList.remove('mdc-ripple-upgraded--background-focused');
    }

    public connectedCallback() {
        this.initialize();
    }

    public componentDidLoad() {
        this.initialize();
    }

    private initialize() {
        const element = this.host.shadowRoot.querySelector('.mdc-icon-button');
        if (!element) {
            return;
        }

        this.mdcIconButtonRipple = new MDCRipple(element);
        this.mdcIconButtonRipple.unbounded = true;
        this.host.addEventListener('click', this.removeFocusedStyleOnClick);
    }

    public disconnectedCallback() {
        this.mdcIconButtonRipple?.destroy();
        this.host.removeEventListener('click', this.removeFocusedStyleOnClick);
    }

    public render() {
        const buttonAttributes: { tabindex?: string } = {};
        if (this.host.hasAttribute('tabindex')) {
            buttonAttributes.tabindex = this.host.getAttribute('tabindex');
        }

        const iconAttributes: { badge?: boolean; size?: IconSize } = {};
        if (this.elevated) {
            iconAttributes.badge = true;
            iconAttributes.size = 'small';
        }

        return (
            <button
                class="mdc-icon-button"
                disabled={this.disabled}
                aria-label={this.label}
                title={this.label}
                {...buttonAttributes}
            >
                <limel-icon name={this.icon} {...iconAttributes} />
            </button>
        );
    }
}
