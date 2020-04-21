import { Component, OnInit, OnChanges } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { IrisService } from '../../services/iris.service';
import { SismosApiService } from '../../services/sismos-api.service';



@Component({
  selector: 'app-recorridos',
  templateUrl: './recorridos.component.html',
  styleUrls: ['./recorridos.component.scss']
})
export class RecorridosComponent implements OnInit, OnChanges {

  mensaje: string;

  fechaInicio: Date;
  fechaFin: Date;

  busquedaDatos = false;
  mapa: boolean;
  lat = 4.66774;
  lng = -74.13200;
  zoom = 3;
  datosEventos = [];
  recorridos = [];
  lista: boolean;
  listaseleccionada: any;

  constructor(
    private snackBar: MatSnackBar,
    private irisService: IrisService,
    private sismosApiService: SismosApiService,
    ) {
      this.busquedaDatos = false;
      this.mapa = false;
      this.lista = false;
     }

  ngOnInit() {
  }

  ngOnChanges(event: any) {
    console.log(event);
  }

  buscarEventos() {
    // this.busquedaDatos = true;
    this.lista = false;
    this.mapa = false;
    console.log(this.fechaInicio);
    if (this.fechaInicio === undefined) {
      this.openSnackBar('Selecciones fecha de inicio', 'Aceptar');
    }
    if (this.fechaFin === undefined) {
      this.openSnackBar('Selecciones fecha de fin', 'Aceptar');
    }
    if (  (this.fechaFin !== undefined) && (this.fechaInicio !== undefined) ) {
      // console.log(`query?starttime=${this.fechaInicio.toISOString()}&endtime=${this.fechaFin.toISOString()}`);
      this.busquedaDatos = true;
      this.mensaje = 'Consultanto datos de eventos';

      this.irisService.get(`query?starttime=${this.fechaInicio.toISOString()}&endtime=${this.fechaFin.toISOString()}`).subscribe(dato => {
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
    console.log(datosEventos);
    this.mensaje = 'Identificando recorridos de los sismos';

    this.sismosApiService.post('evento', datosEventos).subscribe(dato => {
      this.recorridos = <any[]>dato;
      console.log(this.recorridos);
      this.busquedaDatos = false;
      this.lista = true;

    }, (error) => {
      console.log(error);
      // this.mensaje = 'Realizando conversion de datos';
      // this.datosEventos =  this.irisService.XmlToJSON(error_service);
      // console.log(this.datosEventos);
      // this.ObtenerRecorridos(this.irisService.XmlToJSON(error_service))
      // this.busquedaDatos = false;
    });

  }

  prueba() {
    console.log(this.listaseleccionada);
    this.mapa = !this.mapa;

  }

  indexLista(event: any){
    // this.listaseleccionada = i;
    console.log(event);
  }


}
