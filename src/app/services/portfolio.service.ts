import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project, ContactResponse } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private http = inject(HttpClient);
  //private API_URL = 'http://localhost:3000/api';
  private API_URL = 'https://portfolio-app-q0w1.onrender.com/api';

  // Signals for reactive state
  projects = signal<Project[]>([]);
  pwaStatus = signal('PWA is Online and Registered successfully!');

  loadProjects() {
    this.http.get<Project[]>(`${this.API_URL}/projects`).subscribe(data => {
      this.projects.set(data);
    });
  }

  sendContact(formData: any) {
    return this.http.post<ContactResponse>(`${this.API_URL}/contact`, formData);
  }
}