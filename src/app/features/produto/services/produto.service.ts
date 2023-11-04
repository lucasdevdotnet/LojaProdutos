import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto, Produtos } from '../../models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  // injeção de dependencias

  private baseUrl = 'http://localhost:3000/'

  getProdutos(): Observable<Produtos> {
    return this.http.get<Produtos>(`${this.baseUrl}produtos`);
  }

  getProdutoId(id:string): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}produtos/${id}`);
  }

  constructor(private http: HttpClient) {}
}
