import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NewsComponent } from './news.component';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

  search = 'associated-press';

  constructor (
    private http: Http
  ) {}

  getNews() {
    return this.http.get(`https://newsapi.org/v1/articles?source=${this.search}&apiKey=5db44d48109b427aaf891efcd542b908`)
    .map((res: Response) => res.json());
  }
}
