import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  private service = inject(PortfolioService);
  activeFilter = signal('all');

  // Automatically recalculates when projects() or activeFilter() changes
  filteredProjects = computed(() => {
    const allProjects = this.service.projects();
    if (this.activeFilter() === 'all') return allProjects;
    return allProjects.filter(p => p.technologiesUsed.includes(this.activeFilter()));
  });

  ngOnInit() {
    this.service.loadProjects();
  }

  onFilterChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.activeFilter.set(value);
  }
}