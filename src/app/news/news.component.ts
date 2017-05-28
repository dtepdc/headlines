import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  // instantiate headlines to an empty array
  headline: any = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.newsService.getNews().subscribe(headline => {
      this.headline = headline.articles;
    });
  }
}
