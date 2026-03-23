import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="formCard card">
      <h2>Contact Me</h2>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <input formControlName="name" placeholder="Name">
        <input formControlName="email" type="email" placeholder="Email">
        <textarea formControlName="message" placeholder="Message"></textarea>
        <button type="submit" [disabled]="form.invalid">Send Message</button>
      </form>
      @if (status()) { <p class="msg ok">{{ status() }}</p> }
    </section>
  `
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private service = inject(PortfolioService);
  status = signal('');

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  submit() {
    this.service.sendContact(this.form.value).subscribe(res => {
      this.status.set(res.message);
      this.form.reset();
    });
  }
}