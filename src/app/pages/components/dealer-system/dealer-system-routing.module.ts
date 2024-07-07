import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerSystemComponent } from './dealer-system.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: DealerSystemComponent }
  ])],
  exports: [RouterModule]
})
export class DealerSystemRoutingModule { }
