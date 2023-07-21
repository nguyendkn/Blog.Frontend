import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IFeature } from 'src/app/shared/common/interfaces/feature.interface';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    imports: [CommonModule, RouterLink],
})
export class SidebarComponent {
    features: IFeature[] = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About Me',
            path: '/about-me',
        },
    ];
}
