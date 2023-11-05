export interface Produto
{
  id: number;
  nome: string;
  preco: string;
  imagemUrl?: string;
  descricao:string;
  estoque:number;
}

export interface Produtos extends Array<Produto>{};
