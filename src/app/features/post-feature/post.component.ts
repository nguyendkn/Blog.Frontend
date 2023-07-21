import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService } from 'src/app/services/markdown.service';

@Component({
    standalone: true,
    selector: 'app-post',
    templateUrl: './post.component.html',
    imports: [CommonModule, HttpClientModule],
})
export class PostComponent implements OnInit {
    rawHtmlString: string = '';
    sanitizedHtml?: SafeHtml = undefined;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly markdownService: MarkdownService,
        private readonly httpClient: HttpClient,
        private readonly sanitizer: DomSanitizer,
        @Inject(PLATFORM_ID) private platformId: Object
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
                    if (isPlatformBrowser(this.platformId)) {
                        this.sanitizedHtml =
                            this.sanitizer.bypassSecurityTrustHtml(content);
                    } else {
                        this.sanitizedHtml = this.rawHtmlString;
                    }
                });
            console.log(markdownFile);
        });
    }
}
