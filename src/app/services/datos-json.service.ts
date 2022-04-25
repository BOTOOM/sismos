import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

const url = `https://raw.githubusercontent.com/ACMUD/Datos_json/master/App_web/`;


@Injectable({
  providedIn: 'root'
})
export class DatosJsonService {

  constructor(private http: HttpClient) {
    console.info('servicio de datos_json funcionando');
    // this.get('ante_proy');
   }

   get(endpoint: string) {
    return this.http.get(`${url}${endpoint}.json`)
   }
}
