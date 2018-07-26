import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medico } from '../../model/Medico';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private apiUrl : string;

  medicosList = [
    {
      id_medico: 1,
      celular: '034999924449',
      nome: 'Pedro Vitorino',
      cpf: '10113786638',
      data_nascimento: new Date('12/28/1993')
    },
    {
      id_medico: 2,
      celular: '034999923339',
      nome: 'Pedro Sousa',
      cpf: '10113786538',
      data_nascimento:  new Date('11/22/1990')
    },
  ]

  constructor(private configService : ConfigService,
              private httpClient: HttpClient) {
  }

  // getMedicos() {
  //   this.configService.getConfigUrl().subscribe(url => {
  //     if(url !== undefined) {
  //       this.apiUrl = url.medtimeUrl + "api/";

  //       this.httpClient.get(this.apiUrl + "Medicos")
  //       .subscribe(doctorList => {
  //           console.log(doctorList)
  //         }
  //       );
  //     }
  //   });
  // }

  getMedicos() {
    return this.medicosList;
  }

  // addMedicos(body: Medico) {
  //   this.configService.getConfigUrl().subscribe(url => {
  //     if(url !== undefined) {
  //       this.apiUrl = url.medtimeUrl + "api/";

  //       this.httpClient.post<Medico>(this.apiUrl + "Medicos", body)
  //       .subscribe(doctorList => {
  //           console.log(doctorList)
  //         }
  //       );
  //     }
  //   });
  // }

  addMedicos(body: Medico) {
    this.medicosList.push(body);
  }
}
