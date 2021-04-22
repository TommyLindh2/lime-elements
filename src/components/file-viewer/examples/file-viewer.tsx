import { Component, h } from '@stencil/core';

@Component({
    tag: 'limel-example-file-viewer',
    shadow: true,
    styleUrl: 'file-viewer.scss',
})
export class FileViewerExample {
    public render() {
        return [
            <h4>Image</h4>,
            <limel-file-viewer
                url="https://www.lime-technologies.se/wp-content/uploads/2021/02/SummerParty-8-scaled.jpg"
                alt="Some of the people working at Lime Technologies"
                type="image/jpg"
            />,
            <h4>PDF</h4>,
            <limel-file-viewer
                url="https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf"
                type="application/pdf"
            />,
            <h4>Text</h4>,
            <limel-file-viewer
                url="https://filesamples.com/samples/document/txt/sample1.txt"
                type="text/plain"
            />,
            <h4>Audio</h4>,
            <limel-file-viewer
                url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3"
                type="audio/mpeg"
            />,
            <h4>Video</h4>,
            <limel-file-viewer
                url="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4"
                type="video/mp4"
            />,
            <h4>Office files</h4>,
            <h5>Microsoft Word `.doc`</h5>,
            <limel-file-viewer
                url="https://file-examples-com.github.io/uploads/2017/02/file-sample_1MB.doc"
                type="application/doc"
            />,
            <h5>Microsoft Word `.docx`</h5>,
            <limel-file-viewer
                url="https://file-examples-com.github.io/uploads/2017/02/file-sample_1MB.docx"
                type="application/doc"
            />,
            <h5>Microsoft PowerPoint `.ppt`</h5>,
            <limel-file-viewer
                url="https://file-examples-com.github.io/uploads/2017/08/file_example_PPT_1MB.ppt"
                type="application/doc"
            />,
            <h5>Microsoft Excel `.xls`</h5>,
            <limel-file-viewer
                url="https://file-examples-com.github.io/uploads/2017/02/file_example_XLS_5000.xls"
                type="application/doc"
            />,
            <h5>Microsoft Excel `.xlsx`</h5>,
            <limel-file-viewer
                url="https://file-examples-com.github.io/uploads/2017/02/file_example_XLSX_5000.xlsx"
                type="application/doc"
            />,
            <h4>OpenDocument formats</h4>,
            <h5>Text `.odt`</h5>,
            <limel-file-viewer
            url="https://file-examples-com.github.io/uploads/2017/10/file-sample_1MB.odt"
            type="application/doc"
            />,
            <h5>Spreadsheet `.odt`</h5>,
            <limel-file-viewer
            url="https://file-examples-com.github.io/uploads/2017/10/file_example_ODS_5000.ods"
            type="application/doc"
            />,
            <h5>Presentation `.odp`</h5>,
            <limel-file-viewer
            url="https://file-examples-com.github.io/uploads/2017/10/file_example_ODP_1MB.odp"
            type="application/doc"
            />,
            <h4>Zip (unsupported file type)</h4>,
            <limel-file-viewer
                url="https://file-examples-com.github.io/uploads/2017/02/zip_2MB.zip"
                type="application/zip"
            />,
        ];
    }
}
