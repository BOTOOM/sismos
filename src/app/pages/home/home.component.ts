import { Component, OnInit } from '@angular/core';
import { IrisService } from '../../services/iris.service';
import { NgxXml2jsonService } from 'ngx-xml2json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  grupos: any;
  xml = `<note><to>User</to><from>Library</from><heading>Message</heading><body>Some XML to convert to JSON!</body></note>`;
  eventos: any;
  datosSimples = [];
  mapa = true;
  lat = 4.66774;
  lng = -74.13200;
  zoom = 2;


  constructor(
    private irisService: IrisService,
    private ngxXml2jsonService: NgxXml2jsonService
  ) { }

  ngOnInit() {
    this.irisService.get('').subscribe(dato => {
      // console.log(dato);
      this.grupos = dato;
      console.log(this.grupos);
    }, (errorService) => {
      // console.log(error_service);
      const parser = new DOMParser();
      const xml = parser.parseFromString(errorService.error.text, 'text/xml');
      const obj = this.ngxXml2jsonService.xmlToJson(xml);
      // console.log(obj);
      this.eventos = obj['q:quakeml']['eventParameters']['event'];
      // console.log(this.eventos);
      this.converionDatosSimples();
    });
  }

  circuloClic(event) {
    console.log(event);
  }


  converionDatosSimples() {
    for (let i = 0; i < this.eventos.length; i++) {
      this.datosSimples.push({
        Lugar: this.eventos[i]['description']['text'],
        Longitud: Number( this.eventos[i]['origin']['longitude']['value'] ),
        Latitud: Number( this.eventos[i]['origin']['latitude']['value'] ),
        Magnitud: this.eventos[i]['magnitude']['mag']['value']
      });
    }
    console.log(this.datosSimples);
  }

}
