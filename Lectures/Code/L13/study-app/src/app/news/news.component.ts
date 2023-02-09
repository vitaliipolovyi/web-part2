import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  chosenNewsUrl: SafeResourceUrl | null;
  chosenArticle: News | null;
  searchString: string;
  viewBtnClass: string;
  news: News[];
  initNews: News[];
  isTrue: Boolean;
  articleSearchClasses: any = {}

  constructor(private newsService: NewsService, private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getNews()
    this.viewBtnClass = "yellow-btn"
  }

  oSearchStringChange($event: string) {
    if ($event.length === 0) {
      this.news = this.initNews
    } else {
      this.news = this.initNews.filter((item: News) => {
        return item.content.indexOf($event) >= 0 || item.description.indexOf($event) >= 0
      })
    }
  }

  onNewsViewClick($event: Event, article: News) {
    this.chosenArticle = article
    this.chosenNewsUrl = article.url === this.chosenNewsUrl
      ? null : this.domSanitizer.bypassSecurityTrustResourceUrl(article.url)
  }

  setBtnClass(article: News): Boolean {
    return this.chosenArticle?.url === article.url
  }

  onArticleContentHover() {
    this.articleSearchClasses.hovered = true
  }

  onArticleContentBlur() {
    this.articleSearchClasses.hovered = false
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(news => {
        this.news = news
        this.initNews = news.slice()
      })
  }
}
