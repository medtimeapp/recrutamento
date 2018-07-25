import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import validarCpf from 'validar-cpf';


@Component({
  selector: 'app-validate-cpf',
  templateUrl: './validate-cpf.component.html',
  styleUrls: ['./validate-cpf.component.scss']
})
export class ValidateCpfComponent implements OnInit, OnChanges {
  @Input() formSubmitted: boolean;
  @Output() cpfStatus = new EventEmitter<boolean>();

  @ViewChild('cpf') cpfInput: ElementRef;
  
  constructor() {
    this.formSubmitted = false;
  }

  ngOnInit() {
    if(this.formSubmitted)
      this.validateCpf();
  }

  ngOnChanges() {
    if(this.formSubmitted)
      this.validateCpf();
  }

  validateCpf() {
    this.cpfStatus = validarCpf(this.cpfInput.nativeElement.value);
    this.cpfStatus.emit();
  }
}
