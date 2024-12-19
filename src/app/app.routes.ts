import { Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { CustomerNgForComponent } from './exemplesDirectives/customer-ng-for/customer-ng-for.component';
import { SupplierListComponent } from './exemplesDirectives/supplier-list/supplier-list.component';
import { CustomerListNgIfComponent } from './exemplesDirectives/customer-list-ng-if/customer-list-ng-if.component';

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
    },
    {
        path: "supplier",
        component: SupplierListComponent
    },
    {
        path: 'customer-ng-for',
        component: CustomerNgForComponent
    },
    {
        path: 'customer-ng-if',
        component: CustomerListNgIfComponent
    }

];
