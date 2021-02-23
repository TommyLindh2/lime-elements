import { Component, Element, h, Prop, Watch } from '@stencil/core';

/**
 * This is a smart component that detects most common file types such as
 * image, audio, video, or text files,
 * and renders them properly using native HTML5 elements.
 * @exampleComponent limel-example-file-viewer-image
 * @exampleComponent limel-example-file-viewer-with-picker
 */

@Component({
    tag: 'limel-file-viewer',
    shadow: true,
    styleUrl: 'file-viewer.scss',
})
export class FileViewer {
    /**
     * Link to the file
     */
    @Prop({ reflect: true })
    public url: string;

    /**
     * Alternative text for assistive technologies and screen readers
     */
    @Prop({ reflect: true })
    public alt: string;

    @Prop({ reflect: true })
    public type: string;

    public render() {
        if (!this.type) {
            return;
        }

        if (this.type.startsWith('image/')) {
            return [
                this.renderButtons(),
                <img src={this.url} alt={this.alt} />,
            ];
        }

        if (this.type === 'application/pdf') {
            return <object data={this.url} type={this.type} />;
        }

        if (this.type === 'text/plain') {
            return [
                this.renderButtons(),
                <object data={this.url} type={this.type} />
            ];
        }

        if (this.type.startsWith('audio/')) {
            return (
                <audio controls>
                    <source src={this.url} type={this.type} />
                </audio>
            );
        }

        if (this.type.startsWith('video/')) {
            return (
                <video controls>
                    <source src={this.url} type={this.type} />
                </video>
            );
        }
    }

    private renderButtons() {
        return (
            <div class="buttons">
                <a href={this.url} title="download" download>
                    <limel-icon name="download_2" size="small" />
                </a>
                <a
                    href={this.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="open in a new tab"
                >
                    <limel-icon name="external_link" size="small" />
                </a>
            </div>
        );
    }
}
