import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { PhotoService } from '../../service/photo.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})
export class LandingComponent {

    banners: any[] | undefined;

    images: any[] | undefined;

    images2: any[] | undefined;
    
    responsiveOptions: any[] | undefined;
    
    constructor(public layoutService: LayoutService, public router: Router, private photoService: PhotoService) { }


    ngOnInit() {
        this.photoService.getLandingImages().then((images) => (this.images = images));
        this.photoService.getImages().then((banners) => (this.banners = banners));
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }
    
}
