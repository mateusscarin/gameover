import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  userIsLogged(): boolean {
    return localStorage.getItem('isLogged') === 'true';
  }

  deslogar() {
    localStorage.setItem('isLogged', 'false');
  }
}
