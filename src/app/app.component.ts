import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,
    RouterModule,
    HttpClientModule],
  template: `
  <main>
  <ul>
  <li style="float:right"><a href="#home">Home</a></li>
  <li style="float:right"><a href="#news">News</a></li>
  <li style="float:right"><a href="#contact">Contact</a></li>
  <li style="float:right"><a class="active" href="#about">About</a></li>
</ul>
  <a [routerLink]="['/']">
  <header class="brand-name">
    <img height="25" width="130" class="brand-logo" src="/assets/metataglogo.png" alt="logo" aria-hidden="true">
  </header>
  </a>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
