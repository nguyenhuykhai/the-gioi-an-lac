import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  public dataBanner: any[] = [];

  // Behavior value for Landing Page
  public blockedUI: boolean = false;
  private subscriptions: Subscription[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Thiết lập tiêu đề cho trang
    window.document.title = 'Liên hệ | Thế giới An Lạc';
    // Scroll smooth to top lên đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  ngOnInit() {
    this.dataBanner = [
      {
        id: '1',
        image:
          'assets/demo/images/landing/thumbnail.png',

        title: 'Học từ những chuyên gia',
        description: 'Học từ những chuyên gia hàng đầu',
      },
    ];
  }

  openLink(link: string): void {
    window.open(`${link}`, '_blank');
  }
}
