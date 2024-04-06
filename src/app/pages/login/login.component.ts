import { SocialAuthService } from '@abacritt/angularx-social-login';
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

  constructor(private router: Router, private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.router.navigate(['/dashboard']);
      localStorage.setItem('isLogged', 'true');
    });
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    });
  }

  logar() {
    this.submitted = true;
    if (this.form.valid) {
      this.submitted = false;
      localStorage.setItem('isLogged', 'true');
      this.router.navigate(['/dashboard']);
    }
  }

  testPassword(): void {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-=_+|;':",.<>/?]).+$/;
    this.isPasswordWeak = !(regex.test(this.form.value.senha));
  }

}
