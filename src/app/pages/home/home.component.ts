import { Component, OnInit } from '@angular/core';
import { DatosJsonService } from '../../services/datos-json.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  grupos: any;
  

  constructor(
    private DatosRequest: DatosJsonService

  ) { }

  ngOnInit() {
    this.DatosRequest.get('grupos_interes').subscribe( dato => {
      // console.log(dato);
      this.grupos = dato;
      console.info(this.grupos)
    }, (error_service) => {
      console.log(error_service);
    });
  }

}
