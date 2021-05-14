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

  constructor() { }

  ngOnInit(): void {
    this.id = '000' + this.id;
  }

}
