import { Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { OutputParentComponent } from './output-parent/output-parent.component';

export const routes: Routes = [
    {
        path: '',
        component: Comp1Component,
        pathMatch: 'full'
    },
    {
        path: 'customers',
        component: CustomerListComponent,
        pathMatch: 'full'
    },
    {
        path: "exoOutput",
        component: OutputParentComponent
    }
];
