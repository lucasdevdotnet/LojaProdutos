import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../../models/produto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { criarSenhaForte } from '../validacoes/criarSenhaForte';

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

  // nome: string = '';
  // descricao: string = '';
  // preco: string = '';
  // estoque: number = 0;

  //Cria um agrupamento
  formCadastroProduto!: FormGroup;

  constructor(private produtoService: ProdutoService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {

  }

  criarFormulario(): void {
    this.formCadastroProduto = this.formBuilder.group({
      nome: ['', Validators.required, Validators.min(4)],
      preco: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)], criarSenhaForte()],
      email: ['', [Validators.required, Validators.email]],
      descricao: ['', Validators.required],
      estoque: [0, Validators.required],
    });
  }

  salvarProduto(): void {

    //se o formulario foi tocado
    if (this.formCadastroProduto.touched) {

    }

    // const dados: Produto = {
    //   id: parseInt(this.id),
    //   // nome: this.nome,
    //   // preco: this.preco,
    //   // descricao: this.descricao,
    //   // estoque: this.estoque
    // }
    // if (this.isNovoProduto) {

    //   this.criarProduto(dados);

    // } else {

    //   dados.imagemUrl = this.produto.imagemUrl
    //   this.atualizarProduto(dados);
    // }
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

    this.criarFormulario();

    this.rota = this.activateRoute.snapshot.url[0].path;

    if (this.rota === 'editar-produto') {
      this.id = this.activateRoute.snapshot.url[1].path;

      this.produtoService.getProdutoId(this.id).subscribe(produto => {

        this.produto = produto;

        this.formCadastroProduto.controls['nome'].setValue(this.produto.nome);
        this.formCadastroProduto.controls['descricao'].setValue(this.produto.descricao);
        this.formCadastroProduto.controls['estoque'].setValue(this.produto.estoque);
        this.formCadastroProduto.controls['preco'].setValue(this.produto.preco);

        this.tituloPagina = 'Editar Produto'

      })

    } else {
      this.isNovoProduto = true;

      this.tituloPagina = 'Novo Produto'
    }

  }
}
