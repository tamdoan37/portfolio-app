import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './app.html', // Make sure this matches your file name exactly
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'portfolio-frontend';
}