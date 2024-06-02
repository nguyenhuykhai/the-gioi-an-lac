import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, Injectable } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Subscription } from 'rxjs';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { News, NewsCreate, Category } from 'src/app/core/models';

// Import Storage from Firebase
import { NewsService, FileUploadService } from 'src/app/core/service';
import { FileUpload } from 'src/app/core/models';
import { FileUpload as FileUploadPrime } from 'primeng/fileupload';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
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
  @Input() categories: Category[];
  @Output() courseEmitter = new EventEmitter<string>();
  @Output() displayChange = new EventEmitter<boolean>();

  // Biến validate form
  originalNews: News;
  newNews: News;

  // Biến behavior cho NewCourseDialogComponent
  visible: boolean = false;
  visibleThumbnailDialog: boolean = false;
  newCategory: string = '';
  public blockedUI: boolean = false;

  // Biến cục bộ cho NewCourseDialogComponent
  private subscriptions: Subscription[] = []
  filteredCategory: any[] | undefined;
  originCategory: Category[] = [];
  selectedCategory: Category[];

  // Biến upload file
  selectedFiles?: File;
  currentFileUpload?: FileUpload;
  percentage = 0;
  imageUrl: string = 'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg';
  alreadyUpload: boolean = false;

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
    this.selectedCategory = this.news.category;
    this.imageUrl = this.newNews.image[0];
    this.originCategory = this.categories;
    
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
    this.originCategory.push({
      name: this.newCategory,
      code: this.newCategory.toLowerCase().replace(/ /g, '-'),
    });
    this.newCategory = '';
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
  // filterSemester(event: AutoCompleteCompleteEvent) {
  //   let filtered: any[] = [];
  //   let query = event.query;

  //   for (let i = 0; i < (this.dropDownOptions as any[]).length; i++) {
  //     let category = (this.dropDownOptions as any[])[i];
  //     if (category.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
  //       filtered.push(category);
  //     }
  //   }
  //   this.filteredCategory = filtered;
  // }

  resetForm() {
    this.newNews = this.originalNews;
  }

  //UPLOAD FILE LOGIC ZONE
  showDialogUploadThumbnail() {
    this.visibleThumbnailDialog = true;
  }

  selectFile(event: UploadEvent, fileUploader: FileUploadPrime): void {
    if (!event.files[0]) return;
    if (this.alreadyUpload) { // Kiểm tra nếu đã upload rồi thì xóa ảnh cũ
      this.uploadService.deleteFile("/thegioianlac/news", this.currentFileUpload);
      this.alreadyUpload = false;
    }
    this.selectedFiles = event.files[0];
    this.upload(fileUploader);
  }

  // Upload này config cho viêc upload ảnh thumbnail của course
  upload(fileUploader: FileUploadPrime): void {
    if (!this.selectedFiles) {
      this.showToast('error', 'Chưa chọn ảnh', 'Vui lòng chọn ảnh trước khi upload');
      return;
    }

    const file: File = this.selectedFiles;
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    let getFileInfo = this.removeFileExtension(`/thegioianlac/news/${this.currentFileUpload.file.name}`);
    this.currentFileUpload.path = '/thegioianlac/news';
    this.currentFileUpload.name = getFileInfo.fileName;
    this.uploadService.pushFileToStorage(this.currentFileUpload.name, this.currentFileUpload.path, this.currentFileUpload).subscribe(
      response => {
        if (response.downloadUrl !== '') {
          this.showToast('success', 'Upload ảnh thành công', 'Ảnh đã được lưu trữ');
          this.imageUrl = response.downloadUrl;
          this.alreadyUpload = true;
          this.visibleThumbnailDialog = false;
        } else {
          this.percentage = Math.round(response.percentUpload ?? 0);
          fileUploader.clear();
        }
      },
      error => {
        this.showToast('error', 'Upload ảnh thất bại', 'Vui lòng thử lại sau');
      }
    );
  }

  removeFileExtension(filePath): {  fileName: string } {
    // Extract the directory and file name without the extension
    const lastIndexOfDot = filePath.lastIndexOf('.');
    const lastIndexOfSlash = filePath.lastIndexOf('/');
  
    // Ensure the dot is part of the file name, not the directory name
    if (lastIndexOfDot > lastIndexOfSlash) {
      const filePathWithoutExtension = filePath.substring(0, lastIndexOfDot);
      const fileNameWithoutExtension = filePath.substring(lastIndexOfSlash + 1, lastIndexOfDot);
      return { fileName: fileNameWithoutExtension };
    }
  
    // If no valid extension found, return the original path and file name
    const fileName = filePath.substring(lastIndexOfSlash + 1);
    return { fileName };
  }
}
