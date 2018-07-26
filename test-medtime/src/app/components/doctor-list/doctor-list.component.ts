import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../../services/medico/medicos.service';
import { Medico } from '../../model/Medico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  doctorList : Medico[];
  parsedList : Array<any>;
  constructor(private medicoService : MedicosService, private route : Router) {
    this.parsedList = new Array<any>();
  }

  ngOnInit() {
    this.doctorList = this.medicoService.getMedicos();
    this.doctorList.forEach(doctor => this.parseDate(doctor));
  }

  parseDate(doctor : Medico) {
    let docHelper = doctor;
    docHelper['dt_nascimento'] = doctor.data_nascimento.toDateString()
    this.parsedList.push(docHelper);
  }

  addMedico() {
    this.route.navigate(['newDoctor']);
  }
}
