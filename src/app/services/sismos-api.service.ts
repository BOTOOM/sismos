import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


const url = `http://localhost:8080/v1/`;


@Injectable({
  providedIn: 'root'
})


export class SismosApiService {

  constructor(
    private http: HttpClient,
  ) { }


  get(endpoint: string) {
    return  this.http.get(`${url}${endpoint}`);
   }

  post(endpoint: string, elemento: any) {
    return this.http.post(`${url}${endpoint}`, elemento);
  }
}
