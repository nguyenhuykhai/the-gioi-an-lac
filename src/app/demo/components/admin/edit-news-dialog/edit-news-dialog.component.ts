import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, Injectable } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Subscription } from 'rxjs';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { News, NewsCreate } from 'src/app/core/models';

// Import Storage from Firebase
import { NewsService, FileUploadService } from 'src/app/core/service';
import { FileUpload } from 'src/app/core/models';

interface Category {
  name: string;
  code: string;
}

@Component({
  selector: 'app-edit-news-dialog',
  templateUrl: './edit-news-dialog.component.html',
  styleUrl: './edit-news-dialog.component.scss'
})
export class EditNewsDialogComponent {
  // Biến value cho NewCourseDialogComponent
  @Input() display: boolean;
  @Input() news: News;
  @Output() courseEmitter = new EventEmitter<string>();
  @Output() displayChange = new EventEmitter<boolean>();

  // Biến validate form
  originalNews: News;
  newNews: News;

  // Biến behavior cho NewCourseDialogComponent
  visible: boolean = false;
  visibleThumbnailDialog: boolean = false;
  addNewCategoryData: string = '';
  public blockedUI: boolean = false;

  // Biến cục bộ cho NewCourseDialogComponent
  private subscriptions: Subscription[] = []
  dropDownOptions: any[] = [];
  filteredCategory: any[] | undefined;
  selectedCategory: Category;

  constructor(
    private config: PrimeNGConfig,
    private messageService: MessageService,
    private uploadService: FileUploadService,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.initFormData();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  // INITIALIZATION ZONE
  initFormData() {
    this.originalNews = this.news;
    this.newNews = this.news;
    this.dropDownOptions = [
      {
        name: "Chuyên ngành 1",
        code: "CN1"
      },
      {
        name: "Chuyên ngành 2",
        code: "CN2"
      },
      {
        name: "Chuyên ngành 3",
        code: "CN3"
      },
      {
        name: "Chuyên ngành 4",
        code: "CN4"
      },
      {
        name: "Chuyên ngành 5",
        code: "CN5"
      },
      {
        name: "Chuyên ngành 6",
        code: "CN6"
      },
      {
        name: "Chuyên ngành 7",
        code: "CN7"
      },
      {
        name: "Chuyên ngành 8",
        code: "CN8"
      },
      {
        name: "Chuyên ngành 9",
        code: "CN9"
      }
    ];
  }

  // BEHAVIOR LOGIC ZONE
  showToast(severity, summary, detail) {
    this.messageService.add({
      key: 'tst',
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }

  addNewCategory() {
    this.dropDownOptions.push({
      name: this.addNewCategoryData,
      code: this.addNewCategoryData
    });
    this.addNewCategoryData = '';
  }

  // API LOGIC ZONE
  updateNews() {
    this.blockedUI = true;
    this.subscriptions.push(
      this.newsService.updateNews(this.newNews).subscribe(
        (res) => {
          this.showToast('success', 'Thành công', 'Cập nhật bài viết thành công');
          this.blockedUI = false;
          this.displayChange.emit(false);
        },
        (error) => {
          this.showToast('error', 'Lỗi', 'Cập nhật bài viết thất bại');
          this.blockedUI = false;
        }
      )
    )
  }

  cancelSubmit() {
    this.closeDialog();
  }

  closeDialog() {
    this.displayChange.emit(false);
    this.display = false;
    this.resetForm();
  }

  // Auto hiển thị semester gợi ý
  filterSemester(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.dropDownOptions as any[]).length; i++) {
      let category = (this.dropDownOptions as any[])[i];
      if (category.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(category);
      }
    }
    this.filteredCategory = filtered;
  }

  resetForm() {
    this.newNews = this.originalNews;
  }
}
