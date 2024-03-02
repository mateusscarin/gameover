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
    if (this.form.invalid) {
      return;
    }
    localStorage.clear();
    const user: User = {
      email: this.form.value.email,
      nomeCliente: this.form.value.nomeCliente,
      senha: this.form.value.senha
    };
    localStorage.setItem('user', user.toString());
  }

}
