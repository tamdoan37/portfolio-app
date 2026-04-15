import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './resume.component.html'
})
export class ResumeComponent {}