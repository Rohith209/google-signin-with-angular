import { Routes } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { HomeComponent } from './comps/home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LoginComponent
    }, {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
