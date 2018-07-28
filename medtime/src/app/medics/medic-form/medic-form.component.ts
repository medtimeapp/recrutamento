import { Component } from '@angular/core';

import { MedicObject } from '../medic/medic';
import { MedicService } from '../medic/medic.service';

@Component({
  selector: 'ml-medic-form',
  templateUrl: './medic-form.component.html',
  styleUrls: ['./medic-form.component.css']
})
export class MedicFormComponent {

  medic = new MedicObject(0, '', '', '', null);

  constructor(
    private medicService: MedicService
  ) {}

  onSubmit() {    
    this.medicService
    .addMedic(this.medic)
    .subscribe(response => {
      console.log(response);
      this.medic = new MedicObject(0, '', '', '', null);
    });
  }

}
