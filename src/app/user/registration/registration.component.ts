import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styles: ``
})
export class RegistrationComponent implements OnInit {
  form: any;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group(
    {
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: this.matchPasswords
    });
  }

  matchPasswords(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
  
    return password === confirmPassword ? null : { passwordsDontMatch: true };
  }
  

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValidLength = value.length >= 8;

    const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength;

    return !passwordValid ? {
      passwordStrength: {
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSpecialChar,
        isValidLength
      }
    } : null;
  }

  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    }
    else {
      console.log('Form is invalid');
    }
  }
}
