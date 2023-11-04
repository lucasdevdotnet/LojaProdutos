import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto, Produtos } from '../../models/produto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

produtos! : Produtos

constructor(private produtoService: ProdutoService, private router:Router) {

}
// RXJS
//Javascripts  axios axios.get() => requisição assincronas
// async return await
//Angular usa RXJS e não usa promisse
//Angular usa o Observable
selecionarProduto(produto: Produto)
{
this.router.navigate(['produto','editar-produto', produto.id]);
}

  ngOnInit(): void {

    this.produtoService.getProdutos().subscribe(produtos =>{
    this.produtos = produtos
    console.log(this.produtos)

  });
  }

}
