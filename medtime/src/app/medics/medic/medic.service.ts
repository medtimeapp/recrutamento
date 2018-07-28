import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Medic } from "./medic";

const API = 'http://recrutamentomedtimeapi.azurewebsites.net/api/Medicos';

@Injectable({ providedIn: 'root' })
export class MedicService {
    constructor(private http: HttpClient) {}

    listMedic() {
        return this.http.get<Medic[]>(API);
    }

    addMedic(medic: Medic) {
        console.log(JSON.stringify(medic));
        
        return this.http.post<Medic>(API, JSON.stringify(medic));
    }    
}
