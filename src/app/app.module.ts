import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomeComponent } from './modules/home/home.component';
import { AddEmployeeComponent } from './modules/employee/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './modules/employee/delete-employee/delete-employee.component';
import { GetEmployeeComponent } from './modules/employee/get-employee/get-employee.component';
import { GetEmployeesComponent } from './modules/employee/get-employees/get-employees.component';
import { IdFormComponent } from './layouts/forms/id-form/id-form.component';
import { AddEmployeeFormComponent } from './layouts/forms/add-employee/add-employee-form.component';
import { ErrorMessageComponent } from './layouts/error-message/error-message.component';
import { SuccessMessageComponent } from './layouts/success-message/success-message.component';
import { ShowEmployeesComponent } from './layouts/show-content/show-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GetEmployeeComponent,
    GetEmployeesComponent,
    IdFormComponent,
    AddEmployeeFormComponent,
    ShowEmployeesComponent,
    ErrorMessageComponent,
    SuccessMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
