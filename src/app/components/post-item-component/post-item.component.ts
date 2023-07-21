import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'app-post',
    standalone: true,
    templateUrl: './post-item.component.html',
    styles: [],
    imports: [CommonModule, RouterLink],
})
export class PostItemComponent implements OnInit {
    constructor(private router: ActivatedRoute) {}

    ngOnInit(): void {
        this.listenRoutes();
    }

    private listenRoutes() {
        this.router.queryParamMap.subscribe((params) => {
            console.log(params);
        });
    }
}
