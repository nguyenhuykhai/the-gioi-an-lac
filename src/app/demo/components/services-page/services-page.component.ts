import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { PhotoService } from '../../service/photo.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {
  items: MenuItem[] | undefined;

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
      this.items = [
          {
              label: 'Trang chủ',
              icon: 'pi pi-home',
              route: '/landing'
          },
          {
              label: 'Sản phẩm - Dịch Vụ',
              icon: 'pi pi-list',
              route: '/landing',
              items: [
                  {
                      label: 'Trụ',
                      route: '/landing'
                  },
                  {
                      label: 'Dinh Dưỡng Hữu Cơ',
                      route: '/landing'
                  },
                  {
                      label: 'Rau khí canh',
                      route: '/landing'
                  },
                  {
                      label: 'Du phà',
                      route: '/landing'
                  }
              ]
          },
          {
              label: 'Hệ thống Đại lý',
              icon: 'pi pi-building',
              route: '/landing',
              items: [
                  {
                      label: 'Khu vực Đông Bắc Bộ',
                      route: '/landing',
                      items: [
                          {
                              label: 'TP Lạng Sơn',
                              route: '/landing'
                          }
                      ]
                  },
                  {
                      label: 'Đồng Bằng Sông Hồng',
                      route: '/landing',
                      items: [
                          {
                              label: 'TP Hoà Bình',
                              route: '/landing'
                          }
                      ]
                  },
                  {
                      label: 'Đông Nam Bộ',
                      route: '/landing',
                      items: [
                          {
                              label: 'TP Biên Hoà',
                              route: '/landing'
                          }
                      ]
                  },
                  {
                      label: 'Thủ Đô Hà Nội',
                      route: '/landing',
                      items: [
                          {
                              label: 'Hà Nội',
                              route: '/landing'
                          }
                      ]
                  },
                  {
                      label: 'Miền Trung',
                      route: '/landing',
                      items: [
                          {
                              label: 'Đà Nẵng',
                              route: '/landing'
                          }
                      ]
                  },
                  {
                      label: 'Tây Bắc Bộ',
                      route: '/landing',
                      items: [
                          {
                              label: 'TP Lào Cai',
                              route: '/landing'
                          }
                      ]
                  },
                  {
                      label: 'Tây Nguyên',
                      route: '/landing',
                      items: [
                          {
                              label: 'TP Lạng Sơn',
                              route: '/landing'
                          }
                      ]
                  },
                  {
                      label: 'Khu vực Đông Bắc Bộ',
                      route: '/landing',
                      items: [
                          {
                              label: 'TP Buôn Ma Thuột',
                              route: '/landing'
                          }
                      ]
                  },
                  {
                      label: 'Miền Tây Nam Bộ',
                      route: '/landing',
                      items: [
                          {
                              label: 'Long An',
                              route: '/landing'
                          }
                      ]
                  },
                  {
                      label: 'Khu Vực Cần Thơ',
                      route: '/landing',
                      items: [
                          {
                              label: 'Cần Thơ',
                              route: '/landing'
                          }
                      ]
                  },
                  {
                      label: 'Hồ Chí Minh',
                      route: '/landing',
                      items: [
                          {
                              label: 'Kinh Dương Vương',
                              route: '/landing'
                          }
                      ]
                  }
              ]
          },
          {
              label: 'Tin tức',
              icon: 'pi pi-megaphone',
              route: '/landing'
          },
          {
              label: 'Bảng giá',
              icon: 'pi pi-tag',
              route: '/landing'
          },
          {
              label: 'Liên hệ',
              icon: 'pi pi-briefcase',
              route: '/landing'
          },
      ];
  }
}
