import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NewsComponent },
    // { path: '/:id', loadChildren: () => import('../news-detail/news-detail.module').then(m => m.NewsDetailModule) },
  ])],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
