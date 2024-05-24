import { Component, OnInit } from '@angular/core';
import { Price } from '../../api/global';
import { PriceService } from '../../service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent implements OnInit {
  prices!: Price[];
  categoryOne!: Price[]; // Product of "1/ Trụ"
  categoryTwo!: Price[]; // Product of "2/ Dinh Dưỡng Hữu Cơ"
  categoryThree!: Price[]; // Product of "3/ Rau Khí Canh"
  categoryFour!: Price[]; // Product of "4/ Du Phà"

  constructor(
    private priceService: PriceService
  ) {
    // Thiết lập title cho trang
    window.document.title = 'Giá cả | Thế giới An Lạc';
    // Scroll smooth to top lên đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    this.priceService.getPrice().then((data) => {
      this.prices = data;
      this.initCategory(data);
    });
  }

  initCategory(data: Price[]) {
    this.categoryOne = data.filter((item) => item.category === 'tru');
    this.categoryTwo = data.filter((item) => item.category === 'dinh-duong-huu-co');
    this.categoryThree = data.filter((item) => item.category === 'rau-khi-canh');
    this.categoryFour = data.filter((item) => item.category === 'du-pha');
  }

  transform(value: number): string {
    if (typeof value !== 'number') {
      return value;
    }
    // Format the number with thousand separators
    const formattedValue = value.toLocaleString('vi-VN');
    // Append the currency symbol
    return `${formattedValue} VNĐ`;
  }
}
