import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioService } from '../services/portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private service = inject(PortfolioService);

  // Status signals for feedback
  contactStatus = signal('');
  projectStatus = signal('');

  // Contact Form Group
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  // Project Form Group (Matches the Add Project section)
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
          this.contactStatus.set(res.message);
          this.contactForm.reset();
        },
        error: () => this.contactStatus.set('Failed to send message.')
      });
    }
  }

  submitProject() {
    if (this.projectForm.valid) {
      console.log('Project Data:', this.projectForm.value);
      this.projectStatus.set('Project added successfully (Local Simulation)');
      this.projectForm.reset();
    }
  }

  // Handle file input for the project image
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.projectForm.patchValue({ projImage: file });
    }
  }
}