import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigObject } from '../../model/ConfigObject';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl: string

  constructor( private http: HttpClient ) {
    this.configUrl = 'assets/config.json';
    // this.configUrl = "http://recrutamentomedtimeapi.azurewebsites.net/";
  }

  getConfigUrl() {
    return this.http.get<ConfigObject>(this.configUrl);
  }
}
