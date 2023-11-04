import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { of, tap } from 'rxjs';
import { HomeService } from '../services/home.service';

export interface Pessoa {
  nome: string;
  idade: number;
  sexo: string;
}

export interface  Pessoas extends Array<Pessoa>{}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnChanges, DoCheck, OnDestroy,AfterContentInit, AfterViewInit,AfterContentChecked, AfterViewChecked{
  title: string = 'projeto1'
  imgUrl: string = 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w='

  clientes: Pessoas = [
  {
    nome: 'Lucas',
    sexo: 'Masculino',
    idade: 29
  },
  {
    nome: 'João',
    sexo: 'Masculino',
    idade: 29
  },
  {
    nome: 'Maria',
    sexo: 'Feminino',
    idade: 25
  },
]

  ngAfterViewChecked(): void {
    console.log("ViewChecked")
  }
  ngAfterContentChecked(): void {
    console.log("ContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit")
  }
  ngAfterContentInit(): void {
    console.log("Init")
  }
  ngOnDestroy(): void {
    console.log('Destroy');
  }


  ngDoCheck(): void {
    console.log("componente DoCheck")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("componente OnChanges")
  }

  frutas! : string[];

  constructor(private homeServices: HomeService) {


  }
  displayedColumns: string[] = ['nome', 'sexo', 'idade'];
  dataSource!: MatTableDataSource<any>
  ngOnInit(): void {
    this.homeServices.getClientes()
    .subscribe(clientes =>
      {
        this.clientes = clientes;
        this.dataSource = new MatTableDataSource(this.clientes);
      })

    // this.title = 'novo Titulo'
    // this.dataSource = new MatTableDataSource(this.clientes);
  }

  mudarTexto()
  {
    this.title += 'a';
  }



}
