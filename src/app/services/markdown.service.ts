import { Injectable } from '@angular/core';
import { marked } from 'marked';

@Injectable({
    providedIn: 'root',
})
export class MarkdownService {
    constructor() {
        marked.setOptions({});
    }

    convertToHtml(markdownText: string): string {
        return marked(markdownText);
    }
}
