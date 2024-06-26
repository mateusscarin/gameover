import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logar(paylod: any) {
    return this.http.post<any>('http://192.168.104.130:8080/api-vendas/login', paylod);
  }

  logarWithInjection(paylod: any) {
    return this.http.post<any>('http://192.168.104.130:8080/api-vendas/login/with-injection', paylod);
  }
}
