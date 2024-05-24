import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { NewsComponent } from './news.component';


@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    ShareModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
