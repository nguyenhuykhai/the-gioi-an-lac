import { Component, OnInit } from '@angular/core';
import { Dealer } from '../../api/global';
import { DealerService } from '../../service';
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
  dealers!: Dealer[];
  dealersClone!: DealerExpanded[];

  constructor(
    private dealerService: DealerService
  ) { }

  ngOnInit() {
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
}
