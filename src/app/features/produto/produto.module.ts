import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { ProdutoRoutingModule } from './produto-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CadastroComponent,
    ListagemComponent,
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ]
})
export class ProdutoModule { }
