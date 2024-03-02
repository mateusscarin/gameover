import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
    setInterval(() => {
      localStorage.setItem('isLogged', 'false');
    }, 30000)
  }

  ngOnInit(): void { }

}
