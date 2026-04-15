import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, AsyncPipe, MatCardModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  private service = inject(PortfolioService);
  activeFilter$ = new BehaviorSubject<string>('all');

  // filter the pojects based on the active filter
  filteredProjects$ = combineLatest([
    this.service.projects$,
    this.activeFilter$
  ]).pipe(
    map(([projects, filter]) => {
      if (filter === 'all') return projects;
      return projects.filter(p => p.technologiesUsed.includes(filter));
    })
  );

  ngOnInit() {
    this.service.loadProjects();
  }

  onFilterChange(value: string) {
    this.activeFilter$.next(value);
  }
}