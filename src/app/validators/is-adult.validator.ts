import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isAdult(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    //Fecha de cumpleaños
    const dob = control.value;

    // Si el campo está vacío, no se hace ninguna validación
    if (!dob) {
      return null;
    }

    const today = new Date();
    const minDateofBirth = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    )
      .toISOString()
      .split('T')[0];

    return dob > minDateofBirth ? { isAdult: true } : null;
  };
}
