import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { IrisService } from '../../services/iris.service';
import { SismosApiService } from '../../services/sismos-api.service';



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
  recorridos = [];

  constructor(
    private snackBar: MatSnackBar,
    private irisService: IrisService,
    private sismosApiService: SismosApiService,
    ) {
      this.busquedaDatos = false;
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
      }, (error_service) => {
        // this.mensaje = 'Realizando conversion de datos';
        // this.datosEventos =  this.irisService.XmlToJSON(error_service);
        // console.log(this.datosEventos);
        this.ObtenerRecorridos(this.irisService.XmlToJSON(error_service))
        // this.busquedaDatos = false;
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  ObtenerRecorridos(datosEventos: any) {
    this.mensaje = 'Identificando recorridos de los sismos';

    this.sismosApiService.post('evento', datosEventos).subscribe(dato => {
      console.log(dato);
      this.busquedaDatos = false;

    }, (error) => {
      console.log(error);
      // this.mensaje = 'Realizando conversion de datos';
      // this.datosEventos =  this.irisService.XmlToJSON(error_service);
      // console.log(this.datosEventos);
      // this.ObtenerRecorridos(this.irisService.XmlToJSON(error_service))
      // this.busquedaDatos = false;
    });

  }


}
