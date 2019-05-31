import { Component } from '@stencil/core';

@Component({
    tag: 'limel-example-chip',
    shadow: true,
})
export class ChipSetExample {

    constructor() {
        this.onInteract = this.onInteract.bind(this);
    }

    public render() {
        return [
            <limel-chip
                onInteract={this.onInteract}
                value={{
                    id: 'deer',
                    text: 'Deer',
                    removable: true,
                    icon: 'deer',
                    iconColor: 'var(--lime-green)'
                }}
            />,
        ];
    }

    private onInteract(event) {
        console.log(event.detail);
    }
}
