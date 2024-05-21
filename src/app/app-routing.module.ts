import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { DefaultLayoutComponent } from "./share/layout/default-layout/default-layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: DefaultLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
                    { path: 'services', loadChildren: () => import('./demo/components/services-page/services-page.module').then(m => m.ServicesPageModule) }
                ]
            },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
