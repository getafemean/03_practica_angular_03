import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos-de-pipes',
  templateUrl: './tipos-de-pipes.component.html',
  styleUrls: ['./tipos-de-pipes.component.scss']
})
export class TiposDePipesComponent implements OnInit {

  texto: string = 'ciudad de Madrid';
  id: any = 1;
  ahora: object = new Date();
  importe: number = 1876.765765;
  divisa: string = 'EUR';
  numeroDecimales: number = 2;

  constructor() { }

  ngOnInit(): void {
    this.id = '000' + this.id;
  }

  setNumeroDecimales(e: number) {
    if(this.numeroDecimales + e >= 0) {
      this.numeroDecimales += e;
    }
  }

}
