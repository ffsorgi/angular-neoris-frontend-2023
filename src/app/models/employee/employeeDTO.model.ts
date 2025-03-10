export class EmployeeDTO {
  nroDocumento: number;
  nombre: string;
  apellido: string;
  email: string;
  fechaNacimiento: Date;
  fechaIngreso: Date;

  constructor(
    nroDocumento: number,
    nombre: string,
    apellido: string,
    email: string,
    fechaNacimiento: Date,
    fechaIngreso: Date
  ) {
    this.nroDocumento = nroDocumento;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.fechaNacimiento = fechaNacimiento;
    this.fechaIngreso = fechaIngreso;
  }
}
