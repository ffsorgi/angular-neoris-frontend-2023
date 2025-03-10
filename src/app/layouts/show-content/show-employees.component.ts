import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee/employee.model';

@Component({
  selector: 'show-employees',
  template: `
    <div class="table-responsive">
      <table class="table table-striped table-bordered table-hover mx-auto">
        <thead class="text-center">
          <tr>
            <th>ID</th>
            <th>Dni</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Nacimiento</th>
            <th>Ingreso</th>
            <th>Creación</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let employee of employees">
            <td class="align-middle">{{ employee.id }}</td>
            <td class="align-middle">{{ employee.nroDocumento }}</td>
            <td class="align-middle">{{ employee.nombre }}</td>
            <td class="align-middle">{{ employee.email }}</td>
            <td class="align-middle">{{ employee.fechaNacimiento }}</td>
            <td class="align-middle">{{ employee.fechaIngreso }}</td>
            <td class="align-middle">{{ employee.fechaCreacion }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [
    `
      th {
        background-color: var(--bs-gray-900);
        color: var(--bs-white);
        font-weight: bold;
      }
    `,
  ],
})
export class ShowEmployeesComponent {
  @Input() employees: Employee[] = [];
}
