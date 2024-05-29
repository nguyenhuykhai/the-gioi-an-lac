import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    providers: [MessageService]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;

    username!: string;

    constructor(
        public layoutService: LayoutService,
        public router: Router,
        private messageService: MessageService
      ) {
        // Thiết lập tiêu đề cho trang
        window.document.title = 'Đăng nhập | Thế giới An Lạc';
        // Scroll smooth to top lên đầu trang
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

    //Check authentication
    login() {
        if (this.password === environment.password && this.username === environment.username) {
            localStorage.setItem('isLogged', 'true');
            this.router.navigate(['/admin']);
        } else {
            localStorage.setItem('isLogged', 'false');
            this.showToast('error', 'Lỗi', 'Tên đăng nhập hoặc mật khẩu không đúng.');
        }
    }

    showToast(severity: string, summary: string, detail: string) {
        this.messageService.add({ severity, summary, detail });
    }
}
