import { Component, OnInit } from '@angular/core';
import { Topnews_card, TopnewsService } from '../../../services/topnews.service';

@Component({
  selector: 'app-topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.scss']
})
export class TopnewsComponent implements OnInit {
  topnews: Topnews_card[] = [];

  constructor( private topnewsService: TopnewsService ) { }

  ngOnInit() {
    this.topnews = this.topnewsService.getTopnews();
  }

}
