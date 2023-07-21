import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadMoreComponent } from './components/load-more-component/load-more.component';
import { NavbarComponent } from './components/navbar-component/navbar.component';
import { PostItemComponent } from './components/post-item-component/post-item.component';
import { SidebarComponent } from './components/sidebar-component/sidebar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [
        CommonModule,
        RouterOutlet,
        SidebarComponent,
        NavbarComponent,
        PostItemComponent,
        LoadMoreComponent,
    ],
    styles: [],
})
export class AppComponent {
    title = 'blog';
}
