import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoadMoreComponent } from '../../components/load-more-component/load-more.component';
import { PostItemComponent } from '../../components/post-item-component/post-item.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [CommonModule, PostItemComponent, LoadMoreComponent],
})
export class HomeComponent {}
