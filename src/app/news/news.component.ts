import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  moduleId: module.id,
  selector: 'app-news',
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css']
})
export class NewsComponent implements OnInit {

  public newsList = [];

  constructor( private newsService : NewsService) {
    
   }

  ngOnInit() {

    this.newsService.getNews().subscribe( (theNews : string[]) => {
      this.newsList = theNews;
    });
  }

  OnNewsAction(newsItem : string) {
    alert(newsItem);
  }

}
