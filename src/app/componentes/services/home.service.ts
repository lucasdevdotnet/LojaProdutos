import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private appUrl = 'http://localhost:3000/'

  constructor(private htpp: HttpClient)
  {

  }
  // recuperar nosso clientes
  getClientes(): Observable<any>
  {
    return this.htpp.get(`${this.appUrl}clientes`);

  }
}
