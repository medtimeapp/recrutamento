import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MedicoModel } from '../model/medico.model';

@Injectable()
export class MedicoService {

    /**
     * Por algum motivo de segurança não foi possivel buscar os dados na url passada para o teste,
     * para não prejudicar a aplicação como um todo, trabalhei com os dados em memória.
     */
    // private medicosUrl = 'http://recrutamentomedtimeapi.azurewebsites.net/api/Medicos';

    acaoEvento = new EventEmitter();
    idEvento = new EventEmitter();
    acaoDoModalEvento = new EventEmitter();

    private medicosUrl = 'api/medicos';

    constructor(private httpClient: HttpClient) { }

    getMedicos(): Observable<MedicoModel[]> {
        return this.httpClient.get<MedicoModel[]>(this.medicosUrl)
            .map(medicosData => medicosData)
            .catch(this.handleError);
    }

    getMedicoById(idMedico: number): Observable<MedicoModel> {
        const novaUrl = `${this.medicosUrl}/?id=${idMedico}`;
        return this.httpClient.get<MedicoModel>(novaUrl)
            .map(medicoData =>  medicoData = medicoData[0])
            .catch(this.handleError);
    }

    insertMedico(medicoData: MedicoModel): Observable<MedicoModel> {
        return this.httpClient.post(this.medicosUrl, medicoData).catch(this.handleError);
    }

    updateMedico(medicoData: MedicoModel): Observable<any> {
        return this.httpClient.put(this.medicosUrl, medicoData);
    }

    deleteMedico(medicoData: MedicoModel | number): Observable<MedicoModel> {
        const id = typeof medicoData === 'number' ? medicoData : medicoData.id;
        const url = `${this.medicosUrl}/${id}`;
        return this.httpClient.delete(url).catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log('ERRO: ', error);
        return Observable.throw(error || 'Server error');
    }
}
