import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './news-detail.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NewsDetailComponent }
  ])],
  exports: [RouterModule]
})
export class NewsDetailRoutingModule { }
