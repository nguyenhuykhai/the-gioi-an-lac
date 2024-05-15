import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        ShareModule
    ],
    declarations: [LandingComponent]
})
export class LandingModule { }
