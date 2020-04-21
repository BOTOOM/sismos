import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { IrisService } from '../../services/iris.service';


@Component({
  selector: 'app-recorridos',
  templateUrl: './recorridos.component.html',
  styleUrls: ['./recorridos.component.scss']
})
export class RecorridosComponent implements OnInit {

  mensaje: string;

  fechaInicio: Date;
  fechaFin: Date;

  busquedaDatos = false;
  datosEventos = [];

  constructor(
    private snackBar: MatSnackBar,
    private irisService: IrisService,
    ) {
      this.busquedaDatos = false;false
     }

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
      console.log(`query?starttime=${this.fechaInicio.toISOString()}&endtime=${this.fechaFin.toISOString()}`);
      this.busquedaDatos = true;
      this.mensaje = 'Consultanto datos de eventos';

      this.irisService.get('query?starttime=2020-02-01T00:00:00&endtime=2020-04-07T11:00:00').subscribe(dato => {
        // // console.log(dato);
        // this.grupos = dato;
        // console.log(this.grupos)
      }, (error_service) => {
        // this.mensaje = 'Realizando conversion de datos';
        this.datosEventos =  this.irisService.XmlToJSON(error_service);
        console.log(this.datosEventos);
        this.busquedaDatos = false;
        
        // const parser = new DOMParser();
        // const xml = parser.parseFromString(error_service.error.text, 'text/xml');
        // const obj = this.ngxXml2jsonService.xmlToJson(xml);
        // // console.log(obj);
        // this.eventos = obj['q:quakeml']['eventParameters']['event'];
        // console.log(this.eventos);
        // this.converionDatosSimples();
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }


}
