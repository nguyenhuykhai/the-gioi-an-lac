import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderAdminRoutingModule } from './header-admin-routing.module';
import { HeaderAdminComponent } from './header-admin.component';
import { ShareModule } from '../../share.module';


@NgModule({
  declarations: [HeaderAdminComponent],
  imports: [
    CommonModule,
    ShareModule,
    HeaderAdminRoutingModule
  ]
})
export class HeaderAdminModule { }
