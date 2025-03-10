import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <app-navbar></app-navbar>
    </header>
    <main>
      <div class="container-xs">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
})
export class AppComponent {}
