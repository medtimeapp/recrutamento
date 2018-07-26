import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoComponent } from './medico/medico.component';

const cadastroRoutes: Routes = [
    {path: '', component: MedicoComponent},
    {
        path: 'medico', component: MedicoComponent, children: [
            { path: ':id', component: MedicoComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(cadastroRoutes)
    ],
    exports: [RouterModule]
})

export class CadastroRoutersModule { }
