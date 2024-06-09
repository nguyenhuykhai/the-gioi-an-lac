import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { News } from 'src/app/core/models';
import { NewsService } from 'src/app/core/service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  // Display value for Landing Page
  news: News[] | undefined;
  tagsAray: string[];

  // Behavior value for Landing Page
  public blockedUI: boolean = false;
  private subscriptions: Subscription[] = []

  constructor(
    public layoutService: LayoutService,
    public router: Router,
    private newsService: NewsService
  ) {
    // Thiết lập tiêu đề cho trang
    window.document.title = 'Tin tức | Thế giới An Lạc';
    // Scroll smooth to top lên đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  ngOnInit() {
    this.blockedUI = true;
    this.initHighLighNews();
    this.tagsAray = [
      "sức khỏe", "chăm sóc", "nitrat", "thực phẩm", "độc hại", "dinh dưỡng"
    ]
  }

  initHighLighNews() {
    const newsSub$ = this.newsService.getAllNews().subscribe(
      (res: any) => {
        if (res && res.length > 0) {
          this.news = res.filter((news: News) => news.display === true);
          this.blockedUI = false;
        } else {
          // Handle error here
          this.blockedUI = false;
        }
      },
      (error: any) => {
        // Handle error here
        this.blockedUI = false;
      }
    );

    this.subscriptions.push(newsSub$);
  }
}
