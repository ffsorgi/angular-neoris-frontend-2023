import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee/employee.model';
import { EmployeeDTO } from 'src/app/models/employee/employeeDTO.model';
import { CrudEmployeeService } from 'src/app/services/crud-employee.service';

@Component({
  selector: 'app-add-employee',
  template: `<h2 class="text-center">Añadir empleado</h2>
    <add-employee-form
      (sendEmployeeDTO)="onEmployeeDtoReceived($event)"
    ></add-employee-form>
    <error-message [errorMessage]="errorMessage"></error-message>
    <success-message [successMessage]="successMessage"></success-message>
    <show-employees
      *ngIf="!!successMessage"
      [employees]="employees"
    ></show-employees>`,
})
export class AddEmployeeComponent {
  constructor(private crudService: CrudEmployeeService) {}

  errorMessage: string = '';
  successMessage: string = '';
  employees: Employee[] = [];
  @Output() sendEmployee = new EventEmitter<Employee[]>();
  @Output() sendMessage = new EventEmitter<string>();

  onEmployeeDtoReceived(employeeDTO: EmployeeDTO) {
    this.errorMessage = '';
    this.successMessage = '';
    this.crudService.AddEmployee(employeeDTO).subscribe({
      next: (employee) => {
        this.employees.push(employee);
        this.successMessage = '¡Empleado creado correctamente!.';
        this.sendEmployee.emit(this.employees);
        this.sendMessage.emit(this.successMessage);
      },
      error: (err) => {
        this.errorMessage = err;
        this.sendMessage.emit(this.errorMessage);
      },
    });
  }
}
