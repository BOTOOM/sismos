import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  lat = 4.628333;
  lng = -74.065929;
  zoom = 17;
  markers: Marker[] = [];
  polilinea: Poly[] = [];

  constructor() { }

  ngOnInit() {
  }

}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface Poly {
  latIni: number;
  lngIni: number;
  latFin: number;
  lngFin: number;
}