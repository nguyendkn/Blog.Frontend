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
];
