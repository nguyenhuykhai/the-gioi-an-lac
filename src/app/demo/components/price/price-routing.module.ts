import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceComponent } from './price.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: PriceComponent }
  ])],
  exports: [RouterModule]
})
export class PriceRoutingModule { }
