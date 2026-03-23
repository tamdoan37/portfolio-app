import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,     // Add this to the array
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './app.html', // Verify this file is exactly named app.html
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'portfolio-frontend';
}