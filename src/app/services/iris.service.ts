import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


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
    // private xmtToJson: xml2json,
    ) {
    console.log('iris servicio on');
   }

   get(endpoint: string) {
    return  this.http.get(`${url}${endpoint}${urlPart2}`);
   }
}
