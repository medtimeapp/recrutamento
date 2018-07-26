import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LanguageService } from '../../service/language.service';
import { MedicoService } from '../../service/medico.service';
import { MedicoModel } from '../../model/medico.model';
import { ModalComponent } from './modal/modal.component';
import { documentValidatorProm as validator } from 'br-doc-validator';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit, OnDestroy {

  @ViewChild('f') cpfCnpjForm: NgForm;
  texts;
  cpfCnpjValido: boolean;
  medicosData: MedicoModel[];
  public bsModalRef: BsModalRef;
  subscriptionModalAlert: Subscription;

  constructor(
    private languageService: LanguageService,
    private medicoService: MedicoService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.texts = this.languageService.getText('medico');
    this.getMedicos();
    this.subscriptionModalAlert = this.medicoService.acaoDoModalEvento.subscribe(
      modalAlert => {
        if (modalAlert === 'salvo') {
          this.getMedicos();
          this.cpfCnpjForm.reset();
        }
      });
  }

  getMedicos() {
    this.medicoService.getMedicos()
      .subscribe(data => {
        this.medicosData = data;
      });
  }

  deleteItemBtn(idMedico: number) {
    this.medicoService.deleteMedico(idMedico).subscribe();
    this.getMedicos();
  }

  abrirModal(titulo: string, acao: string, idMedico?: number) {
    if (acao === 'novo') {
      validator(this.cpfCnpjForm.value.cpfCnpj).then((result) => {
        // CPF VALIDO
        this.bsModalRef = this.modalService.show(
          ModalComponent, Object.assign({}, {}, {})
        );
        this.bsModalRef.content.title = titulo;
        this.medicoService.acaoEvento.emit(acao);
      }, (err) => {
        // CPF INVALIDO
        this.cpfCnpjValido = false;
        this.cpfCnpjForm.reset();
        this.cpfCnpjForm.controls.cpfCnpj.markAsTouched();
      });
    } else {
      this.bsModalRef = this.modalService.show(
        ModalComponent, Object.assign({}, {}, {})
      );

      this.bsModalRef.content.title = titulo;
      this.medicoService.acaoEvento.emit(acao);
      this.medicoService.idEvento.emit(idMedico);
    }
  }

  ngOnDestroy() {
    this.subscriptionModalAlert.unsubscribe();
  }
}
