import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../../models/produto.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  id!: string;
  produto!: Produto;

  constructor(private produtoService: ProdutoService, private activateRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    
    this.id = this.activateRoute.snapshot.url[1].path;

    this.produtoService.getProdutoId(this.id).subscribe(produto => {
      this.produto = produto;

    })

  }
}
