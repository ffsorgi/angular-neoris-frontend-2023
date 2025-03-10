import { EmployeeDTO } from './employeeDTO.model';

export class Employee extends EmployeeDTO {
  id: number;
  fechaCreacion: Date;

  constructor(
    id: number,
    nroDocumento: number,
    nombre: string,
    apellido: string,
    email: string,
    fechaNacimiento: Date,
    fechaIngreso: Date,
    fechaCreacion: Date
  ) {
    super(nroDocumento, nombre, apellido, email, fechaNacimiento, fechaIngreso);
    this.id = id;
    this.fechaCreacion = fechaCreacion;
  }
}
