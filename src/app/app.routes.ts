import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./features/home-feature/home.component').then(
                (m) => m.HomeComponent
            ),
    },
    {
        path: 'about-me',
        loadComponent: () =>
            import('./features/about-me-feature/about-me.component').then(
                (m) => m.AboutMe
            ),
    },
    {
        path: 'post/:id',
        loadComponent: () =>
            import('./features/post-feature/post.component').then(
                (m) => m.PostComponent
            ),
    },
];
