import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicFormModule } from './medic-form/medic-form.module';
import { MedicListModule } from './medic-list/medic-list.module';

@NgModule({
    imports: [
        CommonModule,
        MedicFormModule,
        MedicListModule
    ]
})
export class MedicModule {}