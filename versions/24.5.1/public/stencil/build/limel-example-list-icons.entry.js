import { r as registerInstance, h } from './core-804afdbc.js';

const IconsListExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.items = [
            { text: 'King of Tokyo', value: 1, icon: 'gorilla' },
            { text: 'Smash Up!', value: 2, icon: 'alien' },
            { text: 'Pandemic', value: 3, icon: 'virus' },
            { text: 'Catan', value: 4, icon: 'wheat' },
            { text: 'Ticket to Ride', value: 5, icon: 'steam_engine' },
        ];
    }
    render() {
        return h("limel-list", { items: this.items });
    }
};

export { IconsListExample as limel_example_list_icons };