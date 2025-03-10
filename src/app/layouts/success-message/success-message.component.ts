import { Component, Input } from '@angular/core';

@Component({
  selector: 'success-message',
  template: `<div
    class="alert alert-success mt-2 text-center"
    *ngIf="!!successMessage"
  >
    {{ successMessage }}
  </div>`,
})
export class SuccessMessageComponent {
  constructor() {}

  @Input() successMessage: string = '';
}
