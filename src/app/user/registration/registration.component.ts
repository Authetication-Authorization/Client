import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styles: ``
})
export class RegistrationComponent implements OnInit {
  form: any;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      fullName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
    })
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
