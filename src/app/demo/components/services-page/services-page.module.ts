import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageRoutingModule } from './services-page-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { ServicesPageComponent } from './services-page.component';



@NgModule({
  imports: [
    CommonModule,
    ServicesPageRoutingModule,
    ShareModule
  ],
  declarations: [ServicesPageComponent],
})
export class ServicesPageModule { }
