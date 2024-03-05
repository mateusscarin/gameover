import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface User {
  nomeCliente: string,
  email: string,
  senha: string,
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  fb: FormBuilder = new FormBuilder();
  form!: FormGroup;
  submitted: boolean = false;
  isCheckedTerms: boolean = false;
  isPasswordWeak: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomeCliente: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    });
  }

  cadastrar() {
    this.submitted = true
    if (this.form.invalid || !this.isCheckedTerms || this.isPasswordWeak) {
      return;
    }
    localStorage.setItem('isLogged', 'true');
    this.router.navigate(['/home']);
  }

  testPassword(): void {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-=_+|;':",.<>/?]).+$/;
    this.isPasswordWeak = !(regex.test(this.form.value.senha));
  }

}
