import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailRoutingModule } from './news-detail-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { NewsDetailComponent } from './news-detail.component';


@NgModule({
  declarations: [NewsDetailComponent],
  imports: [
    CommonModule,
    ShareModule,
    NewsDetailRoutingModule
  ]
})
export class NewsDetailModule { }
