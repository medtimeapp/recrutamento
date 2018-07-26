import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import validarCpf from 'validar-cpf';


@Component({
  selector: 'app-validate-cpf',
  templateUrl: './validate-cpf.component.html',
  styleUrls: ['./validate-cpf.component.scss']
})
export class ValidateCpfComponent {
  @Output() cpfStatus = new EventEmitter<string>();

  @ViewChild('cpf') cpfInput: ElementRef;
  
  constructor() {
  }

  inputChanged() {
    if(validarCpf(this.cpfInput.nativeElement.value)) {      
      this.cpfStatus.emit(this.cpfInput.nativeElement.value);
    }
    else {
      this.cpfStatus.emit('')
    }
  }
}
