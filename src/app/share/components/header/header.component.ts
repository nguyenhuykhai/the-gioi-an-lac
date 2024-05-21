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
  public items: MenuItem[] = [
    {
      label: 'Trang chủ',
      icon: 'pi pi-home',
      route: '/default'
    },
    {
      label: 'Sản phẩm - Dịch Vụ',
      icon: 'pi pi-list',
      route: '/default/services',
      items: [
        {
          label: 'Trụ',
        },
        {
          label: 'Dinh Dưỡng Hữu Cơ',
        },
        {
          label: 'Rau khí canh',
        },
        {
          label: 'Du phà',
        }
      ]
    },
    {
      label: 'Hệ thống Đại lý',
      icon: 'pi pi-building',
      route: '/default',
      items: [
        {
          label: 'Khu vực Đông Bắc Bộ',
          route: '/default',
          items: [
            {
              label: 'TP Lạng Sơn',
              route: '/default'
            }
          ]
        },
        {
          label: 'Đồng Bằng Sông Hồng',
          route: '/default',
          items: [
            {
              label: 'TP Hoà Bình',
              route: '/default'
            }
          ]
        },
        {
          label: 'Đông Nam Bộ',
          route: '/default',
          items: [
            {
              label: 'TP Biên Hoà',
              route: '/default'
            }
          ]
        },
        {
          label: 'Thủ Đô Hà Nội',
          route: '/default',
          items: [
            {
              label: 'Hà Nội',
              route: '/default'
            }
          ]
        },
        {
          label: 'Miền Trung',
          route: '/default',
          items: [
            {
              label: 'Đà Nẵng',
              route: '/default'
            }
          ]
        },
        {
          label: 'Tây Bắc Bộ',
          route: '/default',
          items: [
            {
              label: 'TP Lào Cai',
              route: '/default'
            }
          ]
        },
        {
          label: 'Tây Nguyên',
          route: '/default',
          items: [
            {
              label: 'TP Lạng Sơn',
              route: '/default'
            }
          ]
        },
        {
          label: 'Khu vực Đông Bắc Bộ',
          route: '/default',
          items: [
            {
              label: 'TP Buôn Ma Thuột',
              route: '/default'
            }
          ]
        },
        {
          label: 'Miền Tây Nam Bộ',
          route: '/default',
          items: [
            {
              label: 'Long An',
              route: '/default'
            }
          ]
        },
        {
          label: 'Khu Vực Cần Thơ',
          route: '/default',
          items: [
            {
              label: 'Cần Thơ',
              route: '/default'
            }
          ]
        },
        {
          label: 'Hồ Chí Minh',
          route: '/default',
          items: [
            {
              label: 'Kinh Dương Vương',
              route: '/default'
            }
          ]
        }
      ]
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
    // this.items = [
    //   {
    //     label: 'Trang chủ',
    //     icon: 'pi pi-home',
    //     route: '/default'
    //   },
    //   {
    //     label: 'Sản phẩm - Dịch Vụ',
    //     icon: 'pi pi-list',
    //     route: '/default/services',
    //     items: [
    //       {
    //         label: 'Trụ',
    //       },
    //       {
    //         label: 'Dinh Dưỡng Hữu Cơ',
    //       },
    //       {
    //         label: 'Rau khí canh',
    //       },
    //       {
    //         label: 'Du phà',
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Hệ thống Đại lý',
    //     icon: 'pi pi-building',
    //     route: '/default',
    //     items: [
    //       {
    //         label: 'Khu vực Đông Bắc Bộ',
    //         route: '/default',
    //         items: [
    //           {
    //             label: 'TP Lạng Sơn',
    //             route: '/default'
    //           }
    //         ]
    //       },
    //       {
    //         label: 'Đồng Bằng Sông Hồng',
    //         route: '/default',
    //         items: [
    //           {
    //             label: 'TP Hoà Bình',
    //             route: '/default'
    //           }
    //         ]
    //       },
    //       {
    //         label: 'Đông Nam Bộ',
    //         route: '/default',
    //         items: [
    //           {
    //             label: 'TP Biên Hoà',
    //             route: '/default'
    //           }
    //         ]
    //       },
    //       {
    //         label: 'Thủ Đô Hà Nội',
    //         route: '/default',
    //         items: [
    //           {
    //             label: 'Hà Nội',
    //             route: '/default'
    //           }
    //         ]
    //       },
    //       {
    //         label: 'Miền Trung',
    //         route: '/default',
    //         items: [
    //           {
    //             label: 'Đà Nẵng',
    //             route: '/default'
    //           }
    //         ]
    //       },
    //       {
    //         label: 'Tây Bắc Bộ',
    //         route: '/default',
    //         items: [
    //           {
    //             label: 'TP Lào Cai',
    //             route: '/default'
    //           }
    //         ]
    //       },
    //       {
    //         label: 'Tây Nguyên',
    //         route: '/default',
    //         items: [
    //           {
    //             label: 'TP Lạng Sơn',
    //             route: '/default'
    //           }
    //         ]
    //       },
    //       {
    //         label: 'Khu vực Đông Bắc Bộ',
    //         route: '/default',
    //         items: [
    //           {
    //             label: 'TP Buôn Ma Thuột',
    //             route: '/default'
    //           }
    //         ]
    //       },
    //       {
    //         label: 'Miền Tây Nam Bộ',
    //         route: '/default',
    //         items: [
    //           {
    //             label: 'Long An',
    //             route: '/default'
    //           }
    //         ]
    //       },
    //       {
    //         label: 'Khu Vực Cần Thơ',
    //         route: '/default',
    //         items: [
    //           {
    //             label: 'Cần Thơ',
    //             route: '/default'
    //           }
    //         ]
    //       },
    //       {
    //         label: 'Hồ Chí Minh',
    //         route: '/default',
    //         items: [
    //           {
    //             label: 'Kinh Dương Vương',
    //             route: '/default'
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Tin tức',
    //     icon: 'pi pi-megaphone',
    //     route: '/default'
    //   },
    //   {
    //     label: 'Bảng giá',
    //     icon: 'pi pi-tag',
    //     route: '/default'
    //   },
    //   {
    //     label: 'Liên hệ',
    //     icon: 'pi pi-briefcase',
    //     route: '/default'
    //   },
    // ];
  }

  toggleMenuBar() {
    this.isHiddenMenuBarResponsive = !this.isHiddenMenuBarResponsive;
  }
}
