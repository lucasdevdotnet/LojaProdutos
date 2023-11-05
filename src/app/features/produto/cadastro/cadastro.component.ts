import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../../models/produto.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  id!: string;
  produto!: Produto;

  rota: string = ''
  tituloPagina: string = ''

  isNovoProduto: boolean = false;

  nome: string = '';
  descricao: string = '';
  preco: string = '';
  estoque: number = 0;

  constructor(private produtoService: ProdutoService, private activateRoute: ActivatedRoute, private router: Router) {

  }

  salvarProduto(): void {

    const dados: Produto = {
      id: parseInt(this.id),
      nome: this.nome,
      preco: this.preco,
      descricao: this.descricao,
      estoque: this.estoque
    }
    if (this.isNovoProduto) {

      this.criarProduto(dados);

    } else {

      dados.imagemUrl = this.produto.imagemUrl
      this.atualizarProduto(dados);
    }
  }

  atualizarProduto(dados: Produto): void {
    this.produtoService.atualizarProdutos(dados).subscribe(response => {

      console.log(response);

      this.router.navigate(['produto', 'listagem']);
      // this.nome = response.nome;
      // this.descricao = response.descricao;
      // this.estoque = response.estoque;
      // this.preco = response.preco

    });

  }

  criarProduto(dados: Produto): void {
    this.produtoService.criarProdutos(dados).subscribe(response => {

      console.log(response);

      this.router.navigate(['produto', 'listagem']);
      // this.nome = response.nome;
      // this.descricao = response.descricao;
      // this.estoque = response.estoque;
      // this.preco = response.preco

    });
  }

  ngOnInit(): void {

    this.rota = this.activateRoute.snapshot.url[0].path;

    if (this.rota === 'editar-produto') {
      this.id = this.activateRoute.snapshot.url[1].path;

      this.produtoService.getProdutoId(this.id).subscribe(produto => {
        this.produto = produto;
        this.nome = produto.nome;
        this.descricao = produto.descricao;
        this.estoque = produto.estoque;
        this.preco = produto.preco

        this.tituloPagina = 'Editar Produto'

      })

    } else {
      this.isNovoProduto = true;

      this.tituloPagina = 'Novo Produto'
    }

  }
}
