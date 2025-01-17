import { MDCLinearProgress } from '@limetech/mdc-linear-progress';
import { Component, Element, h, Prop, Watch } from '@stencil/core';

/**
 * @exampleComponent limel-example-linear-progress
 * @exampleComponent limel-example-linear-progress-color
 * @exampleComponent limel-example-linear-progress-indeterminate
 */
@Component({
    tag: 'limel-linear-progress',
    shadow: true,
    styleUrl: 'linear-progress.scss',
})
export class LinearProgress {
    /**
     * The value of the progress bar. Should be between `0` and `1`.
     */
    @Prop()
    public value: number = 0;

    /**
     * Puts the progress bar in an indeterminate state
     */
    @Prop()
    public indeterminate: boolean = false;

    @Element()
    private host: HTMLLimelLinearProgressElement;

    private mdcLinearProgress: MDCLinearProgress;

    public connectedCallback() {
        this.initialize();
    }

    public componentDidLoad() {
        this.initialize();
    }

    private initialize() {
        const element = this.host.shadowRoot.querySelector(
            '.mdc-linear-progress'
        );
        if (!element) {
            return;
        }

        this.mdcLinearProgress = new MDCLinearProgress(element);
        this.mdcLinearProgress.progress = this.value;
    }

    public disconnectedCallback() {
        if (this.mdcLinearProgress) {
            this.mdcLinearProgress.destroy();
        }
    }

    public render() {
        const classList = {
            'mdc-linear-progress': true,
            'mdc-linear-progress--indeterminate': this.indeterminate,
        };

        return (
            <div role="progressbar" class={classList}>
                <div class="mdc-linear-progress__buffer" />
                <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                    <span class="mdc-linear-progress__bar-inner" />
                </div>
                <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                    <span class="mdc-linear-progress__bar-inner" />
                </div>
            </div>
        );
    }

    @Watch('value')
    protected watchValue(newValue) {
        if (!this.mdcLinearProgress) {
            return;
        }

        this.mdcLinearProgress.progress = newValue;
    }
}
