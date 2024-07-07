import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ContactPageComponent }
  ])],
  exports: [RouterModule]
})
export class ContactPageRoutingModule { }
