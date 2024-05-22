import { Component, OnInit } from '@angular/core';
import { Product } from '../../api/product';
import { Dealer } from '../../api/global';
import { ProductService } from '../../service/product.service';
import { DealerService } from '../../service/dealer.service';
import { DataView } from 'primeng/dataview';

interface DealerExpanded extends Dealer {
  dealerId: string;
  isExpanded: boolean;
}

@Component({
  selector: 'app-dealer-system',
  templateUrl: './dealer-system.component.html',
  styleUrl: './dealer-system.component.scss'
})
export class DealerSystemComponent implements OnInit {
  products!: Product[];
  dealers!: Dealer[];
  dealersClone!: DealerExpanded[];

    constructor(
      private productService: ProductService,
      private dealerService: DealerService
    ) {}

    ngOnInit() {
        this.productService.getProducts().then((data) => {
          this.products = data;
        });
        this.dealerService.getDealers().then((data) => {
          this.dealers = data;
          this.dealersClone = data.map((dealer) => {
            return { ...dealer, dealerId: dealer.id, isExpanded: false };
          });
        });
    }

    toggleDealer(dealer: DealerExpanded) {
      dealer.isExpanded = !dealer.isExpanded;
    }

    onFilter(dv: DataView, event: Event) {
      dv.filter((event.target as HTMLInputElement).value);
  }

    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };
}
