import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';
import { DefaultLayoutComponent } from './default-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';


@NgModule({
  declarations: [DefaultLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule
  ],
  exports: [DefaultLayoutComponent]
})
export class DefaultLayoutModule { }
