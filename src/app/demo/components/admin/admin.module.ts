import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ShareModule } from 'src/app/share/share.module';
import { EditNewsDialogComponent } from './edit-news-dialog/edit-news-dialog.component';
import { CreateNewsDialogComponent } from './create-news-dialog/create-news-dialog.component';


@NgModule({
  declarations: [AdminComponent, EditNewsDialogComponent, CreateNewsDialogComponent],
  imports: [
    CommonModule,
    ShareModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
