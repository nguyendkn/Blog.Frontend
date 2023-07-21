import { Injectable } from '@angular/core';
import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';

@Injectable({
    providedIn: 'root',
})
export class MarkdownService {
    constructor() {
        marked.use(
            gfmHeadingId({
                prefix: 'app',
            })
        );
        marked.setOptions({});
    }

    convertToHtml(markdownText: string): string {
        return marked(markdownText, { mangle: false });
    }
}
