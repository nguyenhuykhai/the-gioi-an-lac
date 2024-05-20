import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DividerModule,
    StyleClassModule,
    ChartModule,
    PanelModule,
    ButtonModule,
    CarouselModule,
    GalleriaModule,
    ImageModule,
    TagModule,
    CardModule,
    MenubarModule,
    FormsModule,
    DataViewModule,
    PickListModule,
    OrderListModule,
    InputTextModule,
    DropdownModule,
    RatingModule,
  ],
  exports: [
    DividerModule,
    StyleClassModule,
    ChartModule,
    PanelModule,
    ButtonModule,
    CarouselModule,
    GalleriaModule,
    ImageModule,
    TagModule,
    CardModule,
    MenubarModule,
    FormsModule,
    DataViewModule,
    PickListModule,
    OrderListModule,
    InputTextModule,
    DropdownModule,
    RatingModule
  ]
})
export class ShareModule { }
