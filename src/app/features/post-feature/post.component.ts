import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService } from 'src/app/services/markdown.service';

@Component({
    standalone: true,
    selector: 'app-post',
    templateUrl: './post.component.html',
    imports: [CommonModule, HttpClientModule],
})
export class PostComponent implements OnInit {
    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly markdownService: MarkdownService,
        private readonly httpClient: HttpClient
    ) {}

    ngOnInit(): void {
        this.listenRoutes();
    }

    private listenRoutes() {
        this.activatedRoute.params.subscribe(({ id }) => {
            const markdownFile = 'assets/markdowns' + '/' + `${id}.md`;
            this.httpClient
                .get(markdownFile, {
                    responseType: 'text',
                })
                .subscribe((markdownText) => {
                    const content =
                        this.markdownService.convertToHtml(markdownText);
                    console.log(content);
                });
            console.log(markdownFile);
        });
    }
}
