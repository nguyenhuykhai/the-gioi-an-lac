import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { PhotoService, BlogService } from '../../service';
import { MenuItem, MessageService } from 'primeng/api';

// IMPORT SERVICE
import { NewsService } from 'src/app/core/service';

// IMPORT INTERFACE
import { Category, News } from 'src/app/core/models';
import { Subscription } from 'rxjs';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  providers: [MessageService]
})
export class AdminComponent {

  // Display value for Landing Page
  news: News[] | undefined;
  selectedNews: News | undefined;
  originCategory: Category[] = [];

  // Behavior value for Landing Page
  public blockedUI: boolean = false;
  loading: boolean = true;
  displayDialog: boolean = false;
  @ViewChild('filter') filter!: ElementRef;
  statuses: any[] = [
    { label: 'Hoạt động', value: true, color: 'approved' },
    { label: 'Tạm dừng', value: false, color: 'rejected' }
  ];

  // Local value
  private subscriptions: Subscription[] = []

  constructor(
    public layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService,
    private messageService: MessageService
  ) {
    // Thiết lập tiêu đề cho trang
    window.document.title = 'Quản lý | Thế giới An Lạc';
    // Scroll smooth to top lên đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  ngOnInit() {
    this.blockedUI = true;
    this.initNews();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
        sub.unsubscribe();
    });
}


  initNews() {
    const newsSub$ = this.newsService.getAllNews().subscribe(
      (res: any) => {
        if (res && res.length > 0) {
          // Get three item to display on Landing Page
          this.news = res;
          this.originCategory = res[0].originCategory;
          this.blockedUI = false;
          this.loading = false;
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

  // API LOGIC ZONE
  updateNews(event: News) {
    const newsSub$ = this.newsService.updateNews(event).subscribe(
      (res: any) => {
        if (res && res.status === 200) {
          this.showToast('success', 'Thành công', 'Cập nhật bài viết thành công');
          this.initNews();
          this.displayDialog = false;
        } else {
          // Handle error here
          this.showToast('error', 'Lỗi', 'Cập nhật bài viết thất bại')
        }
      },
      (error: any) => {
        // Handle error here
        this.showToast('error', 'Lỗi', 'Cập nhật bài viết thất bại')
      }
    );

    this.subscriptions.push(newsSub$);
  }

  deleteNews(id: string) {
    const newsSub$ = this.newsService.deleteNews(id).subscribe(
      (res: any) => {
        if (res && res.status === 200) {
          this.showToast('success', 'Thành công', 'Xóa bài viết thành công');
          this.initNews();
        } else {
          // Handle error here
          this.showToast('error', 'Lỗi', 'Xóa bài viết thất bại')
        }
      },
      (error: any) => {
        // Handle error here
        this.showToast('error', 'Lỗi', 'Xóa bài viết thất bại')
      }
    );

    this.subscriptions.push(newsSub$);
  }

  // BEHAVIOR ZONE
  showToast(severity, summary, detail) {
    this.messageService.add({
      key: 'tst',
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }

  displayEditNewsDialog(data: News) {
    this.selectedNews = data;
    this.displayDialog = true;
  }

  onHideDialog(display: boolean) {
    this.displayDialog = display;
  }

  closeCreateCourseModal(display: boolean) {
    this.displayDialog = display;
  }

  // LIST BLOG ZONE
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal(
      (event.target as HTMLInputElement).value,
      'contains'
    );
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
