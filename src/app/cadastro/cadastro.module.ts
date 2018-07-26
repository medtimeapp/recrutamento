import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TooltipModule, ModalModule } from 'ngx-bootstrap';
import { MedicoComponent } from './medico/medico.component';
import { ModalComponent } from './medico/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [MedicoComponent, ModalComponent],
  entryComponents: [ModalComponent]
})
export class CadastroModule { }
