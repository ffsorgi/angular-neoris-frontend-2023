import { AbstractControl, ValidatorFn } from '@angular/forms';

export function notFutureDate(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    //Fecha ingresada
    const date = control.value;

    // Si el campo está vacío, no se hace ninguna validación
    if (!date) {
      return null;
    }

    const today = new Date().toISOString().split('T')[0];

    return date > today ? { notFutureDate: true } : null;
  };
}
