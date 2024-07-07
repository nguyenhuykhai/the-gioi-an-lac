import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactPageComponent } from './contact-page.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    ShareModule,
    ContactPageRoutingModule
  ]
})
export class ContactPageModule { }
