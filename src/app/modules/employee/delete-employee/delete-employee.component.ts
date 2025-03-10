import { Component, EventEmitter, Output } from '@angular/core';
import { CrudEmployeeService } from 'src/app/services/crud-employee.service';

@Component({
  selector: 'app-delete-employee',
  template: `
    <h2 class="text-center">Eliminar empleado por id</h2>
    <id-form (sendId)="onIdReceived($event)"></id-form>
    <error-message [errorMessage]="errorMessage"></error-message>
    <success-message [successMessage]="successMessage"></success-message>
  `,
})
export class DeleteEmployeeComponent {
  constructor(private crudService: CrudEmployeeService) {}

  errorMessage: string = '';
  successMessage: string = '';
  @Output() sendMessage = new EventEmitter<string>();

  //Se puede agregar un modal de confirmación.
  onIdReceived(id: number) {
    this.errorMessage = '';
    this.successMessage = '';
    this.crudService.DeleteEmployee(id).subscribe({
      next: () => {
        this.successMessage = 'Empleado eliminado correctamente!';
        this.sendMessage.emit(this.successMessage);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.sendMessage.emit(this.errorMessage);
      },
    });
  }
}
