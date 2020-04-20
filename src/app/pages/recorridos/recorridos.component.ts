import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recorridos',
  templateUrl: './recorridos.component.html',
  styleUrls: ['./recorridos.component.scss']
})
export class RecorridosComponent implements OnInit {

  busquedaDatos = false;

  constructor() { }

  ngOnInit() {
  }

  buscarEventos() {
    this.busquedaDatos = true;
  }


}
