import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class NewsService {

private newsList : Array<string> = [
    'The Very First item',
    'Second item',
    'Winning'
  ]

  constructor(private http : Http) { }

  public getOldNews() : Array<string> {
    return  this.newsList;
  }

  public getNews()  {
    return this.http.get('/news.json').map( (resp : Response) => {
      return resp.json();
    }
    )
  }

}
