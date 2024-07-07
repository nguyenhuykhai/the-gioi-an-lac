import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { News } from 'src/app/core/models';
import { NewsService } from 'src/app/core/service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss'
})
export class NewsDetailComponent {
  // Display value for Landing Page
  news: News | undefined;
  newsHighlight: News[] | undefined;
  newsId: string | null = null;

  // Behavior value for Landing Page
  public blockedUI: boolean = false;
  private subscriptions: Subscription[] = []

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService,
    private sanitizer: DomSanitizer
  ) {
    // Thiết lập tiêu đề cho trang
    window.document.title = 'Tin tức | Thế giới An Lạc';
    // Scroll smooth to top lên đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  ngOnInit() {
    this.blockedUI = true;
    this.route.paramMap.subscribe((params) => {
      this.newsId = params.get('id');
      if (this.newsId) {
        this.initNewsById(this.newsId);
      }
    });
    this.initHighLighNews();
  }

  initNewsById(newsId: string) {
    const newsByIdSub$ = this.newsService.getNewsById(newsId).subscribe(
      (res: any) => {
        if (res) {
          this.news = res;
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

    this.subscriptions.push(newsByIdSub$);
  }

  initHighLighNews() {
    const newsSub$ = this.newsService.getAllNews().subscribe(
        (res: any) => {
            if (res && res.length > 0) {
                this.newsHighlight = res;
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

  // Sanitize content
  sanitizeContent(content: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
