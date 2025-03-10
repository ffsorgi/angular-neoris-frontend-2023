import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .logo-section img {
        width: 3.5rem;
      }
    `,
  ],
})
export class NavbarComponent {
  constructor() {}
}
