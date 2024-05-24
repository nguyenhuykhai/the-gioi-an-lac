import { Component, Input } from '@angular/core';
import { Price } from 'src/app/demo/api/global';

@Component({
  selector: 'app-price-item',
  templateUrl: './price-item.component.html',
  styleUrl: './price-item.component.scss'
})
export class PriceItemComponent {
  // Get data from parent component
  @Input() price!: Price;
}
