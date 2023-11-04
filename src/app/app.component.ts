import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy,AfterContentInit, AfterViewInit,AfterContentChecked, AfterViewChecked{

  title: string = 'projeto1'
  imgUrl: string = 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w='

  clientes = [
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

  ngOnInit(): void {

    this.title = 'novo Titulo'

    console.log("componente Onint")
    //quando o componente é inacializado
  }

  mudarTexto()
  {
    this.title += 'a';
  }
}
