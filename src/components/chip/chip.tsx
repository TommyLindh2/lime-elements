import {
    MDCChipSet,
} from '@lime-material-16px/chips';
import { MDCTextField } from '@lime-material-16px/textfield';
import {
    Component,
    Element,
    Event,
    EventEmitter,
    Prop,
    State,
} from '@stencil/core';
import { Chip } from '../chip-set/chip.types';

@Component({
    tag: 'limel-chip',
    shadow: true,
    styleUrl: '../chip-set/chip-set.scss',
})
export class ChipComponent {
    /**
     * List of chips for the set
     */
    @Prop()
    public value: Chip;

    @State()
    private menuOpen = false;

    /**
     * Dispatched when a chip is interacted with
     */
    @Event()
    private interact: EventEmitter<Chip>;

    @Element()
    private host: HTMLElement;

    private mdcChipSet: MDCChipSet;
    private mdcTextField: MDCTextField;

    constructor() {
        this.renderChip = this.renderChip.bind(this);
        this.handleInteraction = this.handleInteraction.bind(this);
        this.handleIconInteraction = this.handleIconInteraction.bind(this);
        this.handleMenuSelect = this.handleMenuSelect.bind(this);
    }

    public componentDidLoad() {
        this.createMDCChipSet();
    }

    public componentWillUpdate() {
        this.destroyMDCChipSet();
    }

    public componentDidUpdate() {
        this.createMDCChipSet();
    }

    public componentDidUnload() {
        this.destroyMDCChipSet();

        if (this.mdcTextField) {
            this.mdcTextField.destroy();
        }
    }

    public render() {
        return (
            <div class={`mdc-chip-set input`}>
                {this.renderChip(this.value)}
                {this.renderMenu(this.value)}
            </div>
        );
    }

    private createMDCChipSet() {
        this.mdcChipSet = new MDCChipSet(
            this.host.shadowRoot.querySelector('.mdc-chip-set')
        );
        this.mdcChipSet.chips.forEach(chip => {
            chip.shouldRemoveOnTrailingIconClick = false;
        });

        this.mdcChipSet.listen(
            'MDCChip:interaction',
            this.handleInteraction
        );

        this.mdcChipSet.listen(
            'MDCChip:trailingIconInteraction',
            this.handleIconInteraction
        );
    }

    private destroyMDCChipSet() {
        if (this.mdcChipSet) {
            this.mdcChipSet.unlisten(
                'MDCChip:interaction',
                this.handleInteraction
            );
            this.mdcChipSet.unlisten(
                'MDCChip:trailingIconInteraction',
                this.handleIconInteraction
            );

            this.mdcChipSet.destroy();
        }
    }

    private handleInteraction() {
        this.interact.emit(this.value);
    }

    private handleIconInteraction() {
        this.interact.emit(this.value);
    }

    private handleMenuSelect(event) {
        console.log(event);
    }

    private renderChip(chip: Chip) {
        return this.renderDefaultChip(chip);
    }

    private renderDefaultChip(chip: Chip) {
        return (
            <div class="mdc-chip" tabindex="0" id={`${chip.id}`}>
                {chip.icon ? this.renderIcon(chip) : null}
                <div class="mdc-chip__text">{chip.text}</div>
                {chip.actions ? this.renderTrailingIcon() : null}
            </div>
        );
    }

    private renderIcon(chip: Chip) {
        const style = {};
        if (chip.iconColor) {
            style['--icon-background-color'] = chip.iconColor;
        }

        return (
            <limel-icon
                class="mdc-chip__icon mdc-chip__icon--leading"
                name={chip.icon}
                style={style}
                size="small"
                badge={true}
            />
        );
    }

    private renderTrailingIcon() {
        return (
            <limel-icon
                class="mdc-chip__icon mdc-chip__icon--trailing"
                tabindex="0"
                role="button"
                name="menu_2"
                onClick={() => this.menuOpen = !this.menuOpen}
            />
        );
    }

    private renderMenu(chip: Chip) {
        return (
            <limel-menu
                items={chip.actions}
                open={this.menuOpen}
                onCancel={() => this.menuOpen = false}
                onSelect={this.handleMenuSelect}
            >
                <span slot="trigger"/>
            </limel-menu>
        );
    }
}
