import { Component  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
/*export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

export class ListadoComponent {
  heroeBorrando: string = '';
  heroes: string [] = ['Spiderman','Iroman', 'Hulk','Thor','Capitan America'];

  borrarHeroes(){
    //const heroeBorrando = this.heroes.shift() || '';
    this.heroeBorrando = this.heroes.shift() || '';
    //console.log(heroeBorrando);

  }
  
}
