import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeDTO } from 'src/app/models/employee/employeeDTO.model';
import { isAdult, notFutureDate } from 'src/app/validators/';

@Component({
  selector: 'add-employee-form',
  //Tambien se puede hacer que se genere a base de parametros.
  templateUrl: 'add-employee-form.component.html',
})
export class AddEmployeeFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  fullNameRegex = /^(?! )[a-zA-Z ]+(?<! )$|^[a-zA-Z]+$/;
  emailRegex = /\S+@\S+\.\S+/;

  constructor(private formBuilder: FormBuilder) {}

  @Output() sendEmployeeDTO = new EventEmitter<EmployeeDTO>();

  ngOnInit() {
    this.form = this.formBuilder.group({
      nroDocumento: ['', [Validators.required, Validators.min(10000000)]],
      nombre: [
        '',
        [Validators.required, Validators.pattern(this.fullNameRegex)],
      ],
      apellido: [
        '',
        [Validators.required, Validators.pattern(this.fullNameRegex)],
      ],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      //Se puede agregar un min y max a cada input para limitar las fechas, pero sin quitar las validaciones.
      //Incluso comprobar que la fecha de ingreso no sea contradictoria con la fecha de nacimiento.
      fechaNacimiento: ['', [Validators.required, isAdult()]],
      fechaIngreso: ['', [Validators.required, notFutureDate()]],
    });
  }

  onSubmit() {
    const {
      nroDocumento,
      nombre,
      apellido,
      email,
      fechaNacimiento,
      fechaIngreso,
    } = this.form.getRawValue();

    const employeeDTO: EmployeeDTO = new EmployeeDTO(
      nroDocumento,
      nombre,
      apellido,
      email,
      fechaNacimiento,
      fechaIngreso
    );

    this.sendEmployeeDTO.emit(employeeDTO);
    this.form.reset();
  }
}
