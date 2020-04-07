import { Component, OnInit } from '@angular/core';
import { IrisService } from '../../services/iris.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  grupos: any;
  

  constructor(
    private irisService: IrisService

  ) { }

  ngOnInit() {
    this.irisService.get('').subscribe( dato => {
      // console.log(dato);
      this.grupos = dato;
      console.log(this.grupos)
    }, (error_service) => {
      console.log(error_service);
    });
  }

}
