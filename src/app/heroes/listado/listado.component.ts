import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['iroman', 'hulk', 'maravilla', 'goku','gojan'];
  result: string = '';
  estadoBorrado:boolean = false;
 
  borrarHeroe(): void {
   const result = this.heroes.shift() || '';
   this.estadoBorrado = true;
   this.result = result;
  }

}
