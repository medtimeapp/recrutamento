import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data/medico.data';
import { AppComponent } from './app.component';
import { MedicoService } from './service/medico.service';
import { CadastroModule } from './cadastro/cadastro.module';
import { CadastroRoutersModule } from './cadastro/cadastro.routes';
import { LanguageService } from './service/language.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CadastroModule,
    CadastroRoutersModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    MedicoService,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
