import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/employee/employee.model';
import { CrudEmployeeService } from 'src/app/services/crud-employee.service';

@Component({
  selector: 'app-get-employees',
  template: `<show-employees [employees]="employees"></show-employees>`,
})
export class GetEmployeesComponent implements OnInit {
  //Acá no se si se puede usar otro que no sea any, por eso lo dejé.
  employees: any[] = [];
  @Output() employeesChange = new EventEmitter<Employee[]>();

  constructor(private crudService: CrudEmployeeService) {}

  ngOnInit(): void {
    this.crudService.GetEmployees().subscribe((data: Employee[]) => {
      this.employees = data.map((employee) => {
        return {
          id: employee.id,
          nroDocumento: employee.nroDocumento,
          nombre: employee.nombre,
          email: employee.email,
          fechaNacimiento: employee.fechaNacimiento,
          fechaIngreso: employee.fechaIngreso,
          fechaCreacion: employee.fechaCreacion,
        };
      });
      this.employeesChange.emit(this.employees);
    });
  }
}
