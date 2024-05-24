import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { PriceComponent } from './price.component';
import { PriceItemComponent } from './price-item/price-item.component';


@NgModule({
  declarations: [PriceComponent, PriceItemComponent, PriceItemComponent],
  imports: [
    CommonModule,
    ShareModule,
    PriceRoutingModule
  ]
})
export class PriceModule { }
