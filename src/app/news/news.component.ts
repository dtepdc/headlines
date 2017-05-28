import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent {
  constructor(private newsService: NewsService) {}
  headlines = {};

  loadNews() {
    this.newsService.getNews().subscribe(data => this.headlines = data);
  }
}
