import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ValidateCpfComponent } from './components/validate-cpf/validate-cpf.component';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'doctorList', component: DoctorListComponent },
  { path: '',
    redirectTo: '/newDoctor',
    pathMatch: 'full'
  },
  { path: 'newDoctor', component: DoctorFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    ValidateCpfComponent,
    DoctorFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
