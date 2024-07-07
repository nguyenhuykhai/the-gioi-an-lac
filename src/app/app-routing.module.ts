import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { DefaultLayoutComponent } from "./share/layout/default-layout/default-layout.component";
import { loginSystemGuard } from './core/guards/login-system.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: DefaultLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./pages/components/landing/landing.module').then(m => m.LandingModule) },
                    { path: 'services', loadChildren: () => import('./pages/components/services-page/services-page.module').then(m => m.ServicesPageModule) },
                    { path: 'dealers', loadChildren: () => import('./pages/components/dealer-system/dealer-system.module').then(m => m.DealerSystemModule)},
                    { path: 'price', loadChildren: () => import('./pages/components/price/price.module').then(m => m.PriceModule)},
                    { path: 'news', loadChildren: () => import('./pages/components/news/news.module').then(m => m.NewsModule) },
                    { path: 'news/:id', loadChildren: () => import('./pages/components/news-detail/news-detail.module').then(m => m.NewsDetailModule)},
                    { path: 'contact', loadChildren: () => import('./pages/components/contact-page/contact-page.module').then(m => m.ContactPageModule) },
                    { path: 'admin', canActivateChild: [loginSystemGuard], loadChildren: () => import('./pages/components/admin/admin.module').then(m => m.AdminModule)}
                ]
            },
            { path: 'users', loadChildren: () => import('./pages/components/auth/auth.module').then(m => m.AuthModule)},
            // { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
