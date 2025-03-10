import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` <div class="home-container">
    <p>Trabajo práctico Frontend - Angular</p>
  </div>`,
  styles: [
    `
      .home-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90vh;
        font-weight: bold;
        font-size: 2rem;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
