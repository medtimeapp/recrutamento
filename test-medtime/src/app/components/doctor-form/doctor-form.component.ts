import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {
  medicoForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
    phone: new FormControl('',  Validators.maxLength(11)),
    birthday: new FormControl('')
  });

  enviar() {
    console.warn(this.medicoForm.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
