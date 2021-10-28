import { Component} from '@angular/core'


@Component({
    selector: 'app-contador',
template: `

<h1>{{titulo}}</h1>

<button (click)="acumular( base )"> + 5</button>

<span> {{numero}} </span>

<button (click)="acumular( -base )"> - 5</button>




`})

export class ContadorComponent {

    titulo = 'Contador App';
    numero:number = 50;
    base:number = 5
  
    /*sumar() {
      this.numero += 1;
    }*/
  
    //base:number = 5
  
    acumular( valor: number ) {
     this.numero +=valor;
    }
    


}