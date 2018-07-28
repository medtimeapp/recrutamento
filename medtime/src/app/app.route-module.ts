import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicListComponent } from './medics/medic-list/medic-list.component';
import { MedicFormComponent } from './medics/medic-form/medic-form.component';

const routes: Routes = [
    { 
        path: 'list', 
        component: MedicListComponent
    },
    { 
        path: 'add', 
        component: MedicFormComponent 
    },
    // { 
    //     path: '**', 
    //     component: NotFoundComponent 
    // }  
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRouteModule { }

