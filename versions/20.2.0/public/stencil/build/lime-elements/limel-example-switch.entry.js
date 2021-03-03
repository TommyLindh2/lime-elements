const h = window.LimeElements.h;

class SwitchExample {
    constructor() {
        this.value = true;
        this.disabled = false;
        this.onClickToggleEnabled = this.onClickToggleEnabled.bind(this);
        this.onClickToggleChecked = this.onClickToggleChecked.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    render() {
        return (h("section", null,
            h("div", null,
                h("limel-switch", { label: `Current value: ${this.value.toString()}`, value: this.value, disabled: this.disabled, onChange: this.onChange }),
                h("limel-flex-container", { justify: "end" },
                    h("limel-button", { onClick: this.onClickToggleEnabled, label: this.disabled ? 'Enable' : 'Disable' }),
                    h("limel-button", { onClick: this.onClickToggleChecked, label: "Toggle checked" }))),
            h("p", null,
                "Value: ",
                h("code", null, this.value.toString()))));
    }
    onClickToggleEnabled() {
        this.disabled = !this.disabled;
    }
    onClickToggleChecked() {
        this.value = !this.value;
    }
    onChange(event) {
        this.value = event.detail;
    }
    static get is() { return "limel-example-switch"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "disabled": {
            "state": true
        },
        "value": {
            "state": true
        }
    }; }
    static get style() { return "limel-switch {\n  margin: 1.25rem 0;\n  display: block; }"; }
}

export { SwitchExample as LimelExampleSwitch };