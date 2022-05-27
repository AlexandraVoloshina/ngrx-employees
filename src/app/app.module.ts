import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AllEmployeeComponent } from './components/allEmployee/all-employee.component';
import { CreateEmployeeComponent } from './components/createEmployee/create-employee.component';
import { GetEmployeeComponent } from './components/getEmployee/get-employee.component';
import { reducers } from './reducers/reducers';
import { EmployeeEffects } from './effects/employees.effects';
import { EmployeeService } from './services/employee.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Data } from './data';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from "@angular/material/sidenav";
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AllEmployeeComponent,
    CreateEmployeeComponent,
    GetEmployeeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([EmployeeEffects]),
    InMemoryWebApiModule.forRoot(Data),
    NoopAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
