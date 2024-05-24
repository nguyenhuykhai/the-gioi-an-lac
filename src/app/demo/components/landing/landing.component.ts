import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { PhotoService, BlogService } from '../../service';
import { MenuItem } from 'primeng/api';

// IMPORT SERVICE
import { NewsService } from 'src/app/core/service';

// IMPORT INTERFACE
import { News } from 'src/app/core/models';
import { Blog } from 'src/app/demo/api/global';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss',
})
export class LandingComponent {

    banners: any[] | undefined;

    images: any[] | undefined;

    images2: any[] | undefined;

    blogs: Blog[] | undefined;

    // Display value for Landing Page
    news: News[] | undefined;

    // Behavior value for Landing Page
    public blockedUI: boolean = false;
    private subscriptions: Subscription[] = []

    constructor(
        public layoutService: LayoutService,
        private route: ActivatedRoute,
        private router: Router,
        private photoService: PhotoService,
        private blogService: BlogService,
        private newsService: NewsService
    ) {
        // Thiết lập tiêu đề cho trang
        window.document.title = 'Trang chủ | Thế giới An Lạc';
        // Scroll smooth to top lên đầu trang
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    ngOnInit() {
        this.blockedUI = true;
        this.photoService.getLandingImages().then((images) => (this.images = images));
        this.photoService.getImages().then((banners) => (this.banners = banners));
        this.initHighLighNews();
    }

    initHighLighNews() {
        const newsSub$ = this.newsService.getAllNews().subscribe(
            (res: any) => {
                if (res && res.length > 0) {
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

        this.subscriptions.push(newsSub$);
    }
}
