import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './modules/employee/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './modules/employee/delete-employee/delete-employee.component';
import { GetEmployeeComponent } from './modules/employee/get-employee/get-employee.component';
import { GetEmployeesComponent } from './modules/employee/get-employees/get-employees.component';

import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'employee/add-employee',
    component: AddEmployeeComponent,
  },
  {
    path: 'employee/get-employee',
    component: GetEmployeeComponent,
  },
  {
    path: 'employee/get-employees',
    component: GetEmployeesComponent,
  },
  {
    path: 'employee/delete-employee',
    component: DeleteEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
