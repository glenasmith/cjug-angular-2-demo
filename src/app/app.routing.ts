import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news';

const appRoutes: Routes = [
    { path: '',  redirectTo: '/news',  pathMatch: 'full'},
    { path: 'news', component: NewsComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes); 