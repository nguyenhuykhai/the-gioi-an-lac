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
import { ScrollTopModule } from 'primeng/scrolltop';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MoneyPipe } from '../money.pipe';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [MoneyPipe],
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
    ScrollTopModule,
    DockModule,
    RadioButtonModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ToastModule,
    TableModule,
    CommonModule,
    FormsModule,
    TooltipModule,
    ToolbarModule,
    CheckboxModule,
    ChipModule,
    DialogModule,
    MultiSelectModule,
    FileUploadModule
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
    RatingModule,
    ScrollTopModule,
    DockModule,
    RadioButtonModule,
    MoneyPipe,
    BlockUIModule,
    ProgressSpinnerModule,
    ToastModule,
    TableModule,
    TooltipModule,
    ToolbarModule,
    CheckboxModule,
    ChipModule,
    DialogModule,
    MultiSelectModule,
    FileUploadModule
  ]
})
export class ShareModule { }
