import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, Injectable } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Subscription } from 'rxjs';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { News, NewsCreate, Category } from 'src/app/core/models';

// Import Storage from Firebase
import { NewsService, FileUploadService } from 'src/app/core/service';
import { FileUpload } from 'src/app/core/models';
import { FileUpload as FileUploadPrime } from 'primeng/fileupload';
import { DomSanitizer } from '@angular/platform-browser';
import { cloneDeep } from 'lodash';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-create-news-dialog',
  templateUrl: './create-news-dialog.component.html',
  styleUrl: './create-news-dialog.component.scss'
})
export class CreateNewsDialogComponent {
  // Biến value cho NewCourseDialogComponent
  @Input() display: boolean;
  @Input() categories: Category[];
  @Output() newsEmitter = new EventEmitter<News>();
  @Output() displayChange = new EventEmitter<boolean>();

  // Biến validate form
  originalNews: News;
  newNews: News;

  // Biến behavior cho NewCourseDialogComponent
  visible: boolean = false;
  visibleThumbnailDialog: boolean = false;
  newCategory: string = '';
  public blockedUI: boolean = false;
  preview: boolean = false;
  disableSubmitBtn: boolean;

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
    private newsService: NewsService,
    private sanitizer: DomSanitizer
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
    this.originalNews = {} as News;
    this.originalNews.display = true;
    this.originalNews.highlight = false;
    this.originalNews.image = ['https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg'];
    this.newNews = cloneDeep(this.originalNews);
    this.originCategory = this.categories;
    this.disableSubmitBtn = true;
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
    this.newNews.category.push({
      name: this.newCategory,
      code: this.newCategory.toLowerCase().replace(/ /g, '-'),
    });
    this.newCategory = '';
  }

  // API LOGIC ZONE
  updateNews() {
    this.blockedUI = true;
    const newsSub$ = this.newsService.createNews(this.newNews).subscribe(
      (res: any) => {
        if (res && res.status === 201 && res.body) {
          this.showToast('success', 'Thành công', 'Tạo bài viết thành công');
          this.blockedUI = false;
          this.newsEmitter.emit(res.body);
          this.closeDialog();
        } else {
          // Handle error here
          this.showToast('error', 'Lỗi', 'Tạo bài viết thất bại');
          this.blockedUI = false;
        }
      },
      (error: any) => {
        // Handle error here
        this.showToast('error', 'Lỗi', 'Tạo bài viết thất bại');
        this.blockedUI = false;
      }
    );

    this.subscriptions.push(newsSub$);
  }

  cancelSubmit() {
    this.deleteImage(); // Kiểm tra nếu đã upload rồi thì xóa ảnh cũ
    this.closeDialog();
  }

  deleteImage() {
    this.uploadService.deleteFile("/thegioianlac/news", this.currentFileUpload);
    this.alreadyUpload = false;
  }

  closeDialog() {
    this.displayChange.emit(false);
    this.display = false;
    this.resetForm();
  }

  resetForm() {
    this.newNews = cloneDeep(this.originalNews);
    this.selectedCategory = this.originalNews.category;
    this.deleteImage();
    this.imageUrl = this.newNews.image[0];
    this.disableSubmitBtn = true;
  }

  // Xử lý thay đổi value news && validate form
  onDetailNewsChange(value: any, name: string) {
    this.newNews = { ...this.newNews, [name]: value };
    // Check field là content, title null thì set biến disableSubmitBtn = true
    if (this.newNews.title === '' ||
      this.newNews.category.length === 0 ||
      this.newNews.subTitle === '' ||
      this.newNews.detail === '') {
      this.disableSubmitBtn = true;
    } else {
      this.disableSubmitBtn = false;
    }
  }

  // Sanitize content: Chuyển content từ string sang HTML
  sanitizeContent(content: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  // Xử lý preview news
  togglePreview() {
    this.preview = !this.preview;
  }

  showDisableUpdateToast() {
    this.showToast('error', 'Lỗi', 'Vui lòng điền đủ thông tin bài viết');
  }

  //UPLOAD FILE LOGIC ZONE
  showDialogUploadThumbnail() {
    this.visibleThumbnailDialog = true;
  }

  selectFile(event: UploadEvent, fileUploader: FileUploadPrime): void {
    if (!event.files[0]) return;
    if (this.alreadyUpload) { // Kiểm tra nếu đã upload rồi thì xóa ảnh cũ
      this.deleteImage();
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
          this.newNews.image[0] = response.downloadUrl;
          this.disableSubmitBtn = false;
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

  removeFileExtension(filePath): { fileName: string } {
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
