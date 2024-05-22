import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { PhotoService } from 'src/app/demo/service/photo.service'
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public items: MenuItem[] | undefined;

  banners: any[] | undefined;

  images: any[] | undefined;

  images2: any[] | undefined;

  responsiveOptions: any[] | undefined;

  isHiddenMenuBarResponsive: boolean = true;

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
    this.items = [
      {
        label: 'Trang chủ',
        icon: 'pi pi-home',
        route: '/default'
      },
      {
        label: 'Sản phẩm - Dịch Vụ',
        icon: 'pi pi-list',
        route: '/default/services',
        fragment: '',
        items: [
          {
            label: 'Trụ',
            route: '/default/services',
            fragment: 'rau-trong-bang-tru',
          },
          {
            label: 'Dinh Dưỡng Hữu Cơ',
            route: '/default/services',
            fragment: 'dinh-duong-huu-co',
          },
          {
            label: 'Rau khí canh',
            route: '/default/services',
            fragment: 'rau-khi-canh-tai-nha',
          },
          {
            label: 'Du phà',
            route: '/default/services',
            fragment: 'du-pha',
          }
        ]
      },
      {
        label: 'Hệ thống Đại lý',
        icon: 'pi pi-building',
        route: '/default/dealers'
      },
      {
        label: 'Tin tức',
        icon: 'pi pi-megaphone',
        route: '/default'
      },
      {
        label: 'Bảng giá',
        icon: 'pi pi-tag',
        route: '/default'
      },
      {
        label: 'Liên hệ',
        icon: 'pi pi-briefcase',
        route: '/default'
      },
    ];
  }

  toggleMenuBar() {
    this.isHiddenMenuBarResponsive = !this.isHiddenMenuBarResponsive;
  }

  navigate(route: string, fragment: string): void {
    this.router.navigate([route], { fragment });
  }
}
