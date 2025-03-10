import { Component, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/employee/employee.model';
import { CrudEmployeeService } from 'src/app/services/crud-employee.service';

@Component({
  selector: 'app-get-employee',
  template: `
    <h2 class="text-center">Obtener empleado por ID</h2>
    <id-form (sendId)="onIdReceived($event)"></id-form>
    <error-message [errorMessage]="errorMessage"></error-message>
    <show-employees [employees]="employees"></show-employees>
  `,
})
export class GetEmployeeComponent {
  employees: Employee[] = [];
  errorMessage: string = '';

  constructor(private crudService: CrudEmployeeService) {}

  @Output() sendMessage = new EventEmitter<string>();
  @Output() employeeChange = new EventEmitter<Employee[]>();

  //Se deberia de agregar algo para ver si lo que se esta mostrando corresponde al id solicitado.
  //Asi no se haría otra llamada a la base de datos.
  onIdReceived(id: number) {
    this.errorMessage = '';
    this.employees = [];
    this.crudService.GetEmployee(id).subscribe({
      next: (employee) => {
        this.employees.push(employee);
        this.employeeChange.emit(this.employees);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.sendMessage.emit(this.errorMessage);
      },
    });
  }
}
