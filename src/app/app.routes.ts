import { Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';

export const routes: Routes = [
    {
        path: '',
        component: Comp1Component,
        pathMatch: 'full'
    }
];
