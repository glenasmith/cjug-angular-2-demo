import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news';
import { NewsformComponent } from './newsform';


const appRoutes: Routes = [
    { path: '',  redirectTo: '/news',  pathMatch: 'full'},
    { path: 'news', component: NewsComponent },
    { path: 'add', component: NewsformComponent },

];

export const appRoutingProviders: any[] = [

];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes); 