import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LanguageService } from '../../../service/language.service';
import { MedicoService } from '../../../service/medico.service';
import { MedicoModel } from '../../../model/medico.model';
import { documentValidatorProm as validator } from 'br-doc-validator';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @ViewChild('f') medicoForm: NgForm;
  @ViewChild('botaoSalvar') btnSalvarRef: ElementRef;
  subscriptionIdUsuarioService: Subscription;
  subscriptionAcaoService: Subscription;
  btnSalvarNome;
  title: string;
  medico: MedicoModel;
  texts;
  idMedico;
  desativarCPF: boolean;
  list;

  constructor(
    private medicoService: MedicoService,
    private languageService: LanguageService,
    public bsModalRef: BsModalRef) {
    this.medico = {
      id: null,
      nome: null,
      cpf: null,
      celular: null,
      data_nascimento: null
    };
  }

  ngOnInit() {
    this.texts = this.languageService.getText('medico');
    this.subscriptionAcaoService = this.medicoService.acaoEvento.subscribe(
      (acaoData) => {
        this.btnSalvarNome = acaoData;
        this.getMedico(acaoData);
      });
  }

  getMedico(acao: string) {
    this.subscriptionIdUsuarioService = this.medicoService.idEvento.subscribe(
      (idData) => {
        this.idMedico = idData;
        this.medicoService.getMedicoById(this.idMedico).subscribe(
          (usuarioData) => {
            if (acao === 'editar') {
              this.medico = usuarioData;
            }
          });
      });

      if (acao !== 'editar') {
        this.medico.cpf = this.list[0];
      }
  }

  btnSalvar(): void {
    if (this.btnSalvarRef.nativeElement.name === 'novo') {
      this.medicoService.insertMedico(this.medicoForm.value).subscribe();
      this.medicoService.acaoDoModalEvento.emit('salvo');
      this.medicoForm.reset();
      this.bsModalRef.hide();

    } else {
      validator(this.medicoForm.value.cpf).then((result) => {
        // CPF VALIDO
        this.medicoService.updateMedico(this.medicoForm.value).subscribe();
        this.medicoService.acaoDoModalEvento.emit('salvo');
        this.medicoForm.reset();
        this.bsModalRef.hide();
      }, (err) => {
        // CPF INVALIDO
        this.medicoForm.controls.cpf.reset();
        this.medicoForm.controls.cpf.markAsTouched();
        return;
      });
    }
  }

  btnCancelar(): void {
    this.medicoForm.reset();
    this.bsModalRef.hide();
  }

  ngOnDestroy() {
    this.subscriptionAcaoService.unsubscribe();
    this.subscriptionIdUsuarioService.unsubscribe();
  }
}
