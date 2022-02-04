import { Component } from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `
  
    <h1>La base es : {{base}}</h1>
    <button (click)="acumular(base)" > + {{base}} </button>
    <h1>{{numero}}</h1>
    <button (click)="acumular(-base)" > - {{base}} </button>

`
})

export class ContadorComponent{
    title: string = 'bases';
    numero: number = 0;
    base:number = 5;


    acumular(valor:number){
        this.numero += valor;
    }
}
