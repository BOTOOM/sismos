import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';



const url = `https://service.iris.edu/fdsnws/event/1/`;
const urlPart2 = `&minmag=4&maxmag=10&orderby=time&format=xml&nodata=404`;
@Injectable({
  providedIn: 'root'
})
export class IrisService {
Datoxml: any;
DatoJson: any;


  constructor(
    private http: HttpClient,
    private ngxXml2jsonService: NgxXml2jsonService,
    ) {
    console.log('iris servicio on');
   }

   get(endpoint: string) {
    return  this.http.get(`${url}${endpoint}${urlPart2}`);
   }

   XmlToJSON(datoXml: any){
    const parser = new DOMParser();
    const xml = parser.parseFromString(datoXml.error.text, 'text/xml');
    const obj = this.ngxXml2jsonService.xmlToJson(xml);
    // console.log(obj);
    const datoJSON = obj['q:quakeml']['eventParameters']['event'];
    return  this.converionDatosSimples(datoJSON) ;
   }

   converionDatosSimples(datoEventos: any) {
    let datosSimples = []

    for (let i = 0; i < datoEventos.length; i++) {
      datosSimples.push({
        Fecha: datoEventos[i]['origin']['time']['value'] ,
        Lugar: datoEventos[i]['description']['text'],
        Longitud: Number( datoEventos[i]['origin']['longitude']['value'] ),
        Latitud: Number( datoEventos[i]['origin']['latitude']['value'] ),
        Magnitud: datoEventos[i]['magnitude']['mag']['value']
      });
    }
    // console.log(datosSimples);
    return datosSimples;
  }
}
