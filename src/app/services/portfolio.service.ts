import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project, ContactResponse } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private http = inject(HttpClient);
  //private API_URL = 'https://localhost:7203/api';
  private API_URL = 'https://portfolio-api-dotnet.onrender.com/api';

  // Signals for reactive state
  projects = signal<Project[]>([]);
  pwaStatus = signal('PWA is Online and Registered successfully!');

  loadProjects() {
    this.http.get<Project[]>(`${this.API_URL}/portfolios`).subscribe(data => {
      this.projects.set(data);
    });
  }

  sendContact(formData: any) {
    return this.http.post<ContactResponse>(`${this.API_URL}/contact`, formData);
  }
}
