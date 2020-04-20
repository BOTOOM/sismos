import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-recorridos',
  templateUrl: './recorridos.component.html',
  styleUrls: ['./recorridos.component.scss']
})
export class RecorridosComponent implements OnInit {

  fechaInicio: Date;
  fechaFin: Date;

  busquedaDatos = false;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  buscarEventos() {
    // this.busquedaDatos = true;
    console.log(this.fechaInicio);
    if (this.fechaInicio === undefined) {
      this.openSnackBar('Selecciones fecha de inicio', 'Aceptar');
    }
    if (this.fechaFin === undefined) {
      this.openSnackBar('Selecciones fecha de fin', 'Aceptar');
    }
    if (  (this.fechaFin !== undefined) && (this.fechaInicio !== undefined) ) {
      console.log(`fechaIni:${this.fechaInicio.toISOString()}&fechaFin:${this.fechaFin}`);
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }


}
