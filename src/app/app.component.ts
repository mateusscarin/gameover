import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nomeCliente: new FormControl(''),
      senha: new FormControl('')
    });
  }

  submit() {
    this.form.value['nomeCliente'] = `'${this.form.value['nomeCliente']}'`;
    this.form.value['senha'] = `'${this.form.value['senha']}'`;
    this.loginService.logar(this.form.value).subscribe(
      resp => { },
      error => { console.log(error.error)}
    );
  }
}
