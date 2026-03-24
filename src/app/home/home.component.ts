import { Component, inject } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <header class="site-header">
      <h1>My Personal Website</h1>
      <p class="muted mt-1">{{ service.pwaStatus() }}</p>
    </header>
    <main>
      <section class="card">
        <h2>Welcome</h2>
        <p>This is the home page of my personal portfolio.</p>
        <table>
          <thead>
            <tr><th>Place</th><th>State</th></tr>
          </thead>
          <tbody>
            <tr><td>Grand Canyon</td><td>Arizona</td></tr>
            <tr><td>Olbrich Gardens</td><td>Wisconsin</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  `
})
export class HomeComponent {
  service = inject(PortfolioService);
}