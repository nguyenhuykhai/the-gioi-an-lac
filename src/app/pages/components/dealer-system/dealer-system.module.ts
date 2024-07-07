import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealerSystemRoutingModule } from './dealer-system-routing.module';
import { DealerSystemComponent } from './dealer-system.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [DealerSystemComponent],
  imports: [
    CommonModule,
    ShareModule,
    DealerSystemRoutingModule
  ]
})
export class DealerSystemModule { }
