import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-message',
  template: ` <div
    class="alert alert-danger text-danger mt-2 text-center"
    *ngIf="!!errorMessage"
  >
    {{ errorMessage }}
  </div>`,
})
export class ErrorMessageComponent {
  constructor() {}

  @Input() errorMessage: string = '';
}
