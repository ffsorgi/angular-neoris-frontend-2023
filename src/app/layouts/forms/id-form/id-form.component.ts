import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'id-form',
  template: `
    <form
      class="d-flex flex-row mb-3"
      [formGroup]="form"
      (ngSubmit)="onSubmit()"
    >
      <input
        type="number"
        class="form-control"
        formControlName="id"
        placeholder="ID"
      />
      <button class="btn btn-dark" type="submit" [disabled]="!form.valid">
        Enviar
      </button>
    </form>
    <div
      class="alert alert-danger text-danger mt-2 text-center"
      *ngIf="form.get('id')?.hasError('min')"
    >
      ID debe ser mayor que 0.
    </div>
  `,
  styles: [
    `
      button {
        margin-left: 10px;
      }
    `,
  ],
})
export class IdFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  @Output()
  sendId = new EventEmitter<number>();

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    this.sendId.emit(this.form.controls['id'].value);
    this.form.reset();
  }
}
