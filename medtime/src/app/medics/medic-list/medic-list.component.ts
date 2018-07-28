import { Component, OnInit } from '@angular/core';
import { Medic } from '../medic/medic';
import { MedicService } from '../medic/medic.service';

@Component({
  selector: 'ml-medic-list',
  templateUrl: './medic-list.component.html'
})
export class MedicListComponent implements OnInit {

  medics: Medic[] = [];

  constructor(
    private medicService: MedicService
  ) {}

  ngOnInit(): void {
    this.medicService
    .listMedic()
    .subscribe(medics => {
      this.medics = this.medics.concat(medics);
    });
  }
}
