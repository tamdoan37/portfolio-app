import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioService } from '../services/portfolio.service';
import { CommonModule, AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AsyncPipe, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private service = inject(PortfolioService);

  contactStatus$ = new BehaviorSubject<string>('');
  projectStatus$ = new BehaviorSubject<string>('');

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  projectForm = this.fb.group({
    projTitle: ['', Validators.required],
    projDesc: ['', Validators.required],
    projTags: ['', Validators.required],
    projLinks: ['', Validators.required],
    projImage: [null]
  });

  submitContact() {
    if (this.contactForm.valid) {
      this.service.sendContact(this.contactForm.value).subscribe({
        next: (res) => {
          this.contactStatus$.next(res.message);
          this.contactForm.reset();
        },
        error: () => this.contactStatus$.next('Failed to send message.')
      });
    }
  }

  submitProject() {
    if (this.projectForm.valid) {
      this.projectStatus$.next('Project added successfully (Local Simulation)');
      this.projectForm.reset();
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.projectForm.patchValue({ projImage: file });
    }
  }
}