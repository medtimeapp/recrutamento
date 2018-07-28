import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MedicFormComponent } from './medic-form.component';
import { CpfCnpjModule } from 'ng2-cpf-cnpj';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CpfCnpjModule
  ],
  declarations: [MedicFormComponent]
})
export class MedicFormModule { }
