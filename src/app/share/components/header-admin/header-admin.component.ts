import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { PhotoService } from 'src/app/demo/service/photo.service'
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.scss'
})
export class HeaderAdminComponent {
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
        route: '/'
      },
      {
        label: 'Sản phẩm - Dịch Vụ',
        icon: 'pi pi-list',
        route: '/services',
        fragment: '',
        items: [
          {
            label: 'Trụ',
            route: '/services',
            fragment: 'rau-trong-bang-tru',
          },
          {
            label: 'Dinh Dưỡng Hữu Cơ',
            route: '/services',
            fragment: 'dinh-duong-huu-co',
          },
          {
            label: 'Rau khí canh',
            route: '/services',
            fragment: 'rau-khi-canh-tai-nha',
          },
          {
            label: 'Du phà',
            route: '/services',
            fragment: 'du-pha',
          }
        ]
      },
      {
        label: 'Hệ thống Đại lý',
        icon: 'pi pi-building',
        route: '/dealers'
      },
      {
        label: 'Tin tức',
        icon: 'pi pi-megaphone',
        route: '/news'
      },
      {
        label: 'Quản lý',
        icon: 'pi pi-megaphone',
        route: '/admin'
      },
      {
        label: 'Bảng giá',
        icon: 'pi pi-tag',
        route: '/price'
      },
      {
        label: 'Liên hệ',
        icon: 'pi pi-briefcase',
        route: '/contact'
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
