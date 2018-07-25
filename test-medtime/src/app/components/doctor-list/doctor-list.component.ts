import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../../services/medico/medicos.service';
import { Medico } from '../../model/Medico';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  doctorList : Medico[];
  constructor(private medicoService : MedicosService) {
  }

  ngOnInit() {
    this.doctorList = this.medicoService.getMedicos();
  }
}
