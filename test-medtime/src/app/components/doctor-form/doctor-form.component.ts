import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MedicosService } from '../../services/medico/medicos.service';
import { Medico } from '../../model/Medico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {
  medicoForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
    phone: new FormControl('',  [Validators.maxLength(12), Validators.minLength(11), Validators.pattern('[0-9]+')]),
    birthday: new FormControl(''),
    cpfForm: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11)])
  });

  doctorToAdd : Medico;
  cpf : string;

  constructor(private doctorService : MedicosService, private route:Router) {
    this.doctorToAdd = new Medico();
    this.cpf = '';
  }

  ngOnInit() {
  }

  setCpfStatus(cpfIncome : string) {
    this.cpf = cpfIncome;
    this.medicoForm.patchValue({'cpfForm': this.cpf})
  }

  enviar() {
    this.doctorToAdd.nome = this.medicoForm.value['name'];
    this.doctorToAdd.celular = this.medicoForm.value['phone'];
    
    if(this.medicoForm.value['birthday'] !== '')
      this.doctorToAdd.data_nascimento = new Date(this.medicoForm.value['birthday'].split('-').join('/'));
    else
      this.doctorToAdd.data_nascimento = new Date();

    if(this.cpf !== '') {    
      this.doctorToAdd.cpf = this.cpf;
      this.doctorToAdd.id_medico = 0;

      this.doctorService.addMedicos(this.doctorToAdd);
      this.route.navigate(['doctorList']);
    }
  }

  listarMedicos() {
    this.route.navigate(['doctorList']);
  }
}
