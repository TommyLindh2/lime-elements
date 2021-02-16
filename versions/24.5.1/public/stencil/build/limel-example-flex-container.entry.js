import { r as registerInstance, h } from './core-804afdbc.js';

const FlexContainerExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.directionOptions = [
            {
                text: 'Horizontal',
                value: 'horizontal',
            },
            {
                text: 'Vertical',
                value: 'vertical',
            },
        ];
        this.alignOptions = [
            {
                value: 'start',
                text: 'Start',
            },
            {
                value: 'center',
                text: 'Center',
            },
            {
                value: 'end',
                text: 'End',
            },
            {
                value: 'stretch',
                text: 'Stretch',
            },
        ];
        this.justifyOptions = [
            {
                value: 'start',
                text: 'Start',
            },
            {
                value: 'center',
                text: 'Center',
            },
            {
                value: 'end',
                text: 'End',
            },
            {
                value: 'space-around',
                text: 'Space around',
            },
            {
                value: 'space-between',
                text: 'Space between',
            },
            {
                value: 'space-evenly',
                text: 'Space evenly',
            },
        ];
        this.reverse = false;
        this.directionOnChange = this.directionOnChange.bind(this);
        this.alignOnChange = this.alignOnChange.bind(this);
        this.justifyOnChange = this.justifyOnChange.bind(this);
        this.reverseOnChange = this.reverseOnChange.bind(this);
    }
    componentWillLoad() {
        this.direction = this.directionOptions[0];
        this.align = this.alignOptions[0];
        this.justify = this.justifyOptions[0];
    }
    render() {
        return [
            h("limel-flex-container", { justify: "space-between" }, h("limel-select", { label: "Direction", options: this.directionOptions, value: this.direction, onChange: this.directionOnChange }), h("limel-select", { label: "Align", options: this.alignOptions, value: this.align, onChange: this.alignOnChange }), h("limel-select", { label: "Justify", options: this.justifyOptions, value: this.justify, onChange: this.justifyOnChange }), h("limel-checkbox", { label: "Reverse", checked: this.reverse, onChange: this.reverseOnChange })),
            h("limel-flex-container", { class: "container", direction: this.direction.value, align: this.align.value, justify: this.justify.value, reverse: this.reverse }, h("div", null, "1"), h("div", null, "2"), h("div", null, "3"), h("div", null, "4"), h("div", null, "5")),
        ];
    }
    directionOnChange(event) {
        this.direction = event.detail;
    }
    alignOnChange(event) {
        this.align = event.detail;
    }
    justifyOnChange(event) {
        this.justify = event.detail;
    }
    reverseOnChange(event) {
        this.reverse = event.detail;
    }
    static get style() { return "limel-flex-container {\n  margin-bottom: 1.25rem;\n}\nlimel-flex-container.container {\n  height: 37.5rem;\n  border: 0.0625rem solid var(--lime-dark-grey);\n  border-radius: 0.1875rem;\n}\nlimel-flex-container div {\n  display: block;\n  padding: 1.5625rem 3.125rem;\n  text-align: center;\n  color: white;\n  font-size: 1.25rem;\n  line-height: 0;\n}\nlimel-flex-container div:nth-child(1) {\n  background-color: var(--lime-red);\n  padding: 0.78125rem 3.125rem;\n}\nlimel-flex-container div:nth-child(2) {\n  background-color: var(--lime-orange);\n  padding: 3.125rem;\n}\nlimel-flex-container div:nth-child(3) {\n  background-color: var(--lime-green);\n}\nlimel-flex-container div:nth-child(4) {\n  background-color: var(--lime-blue);\n  padding: 1.5625rem 6.25rem;\n}\nlimel-flex-container div:nth-child(5) {\n  background-color: var(--lime-magenta);\n  padding: 1.5625rem;\n}"; }
};

export { FlexContainerExample as limel_example_flex_container };