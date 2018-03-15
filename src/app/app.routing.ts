import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const ROUTES: Routes = [
    {
        path: 'about', component: AboutComponent,pathMatch: 'full'
    },
    { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            ROUTES
        )],
    exports: [
        RouterModule
    ]
})
export class AppRouting {
}