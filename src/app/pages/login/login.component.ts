import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fb: FormBuilder = new FormBuilder;
  form!: FormGroup;
  submitted: boolean = false;
  isPasswordWeak: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    });
  }

  logar() {
    this.submitted = true;
    console.log(this.form.controls)
    if (this.form.valid) {
      this.submitted = false;
      localStorage.setItem('isLogged', 'true');
      this.router.navigate(['/home']);
    }
  }

  testPassword(): void {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-=_+|;':",.<>/?]).+$/;
    this.isPasswordWeak = !(regex.test(this.form.value.senha));
  }
}
