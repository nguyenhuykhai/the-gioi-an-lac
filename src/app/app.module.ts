import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { BlogService, PriceService } from './demo/service';
import { DefaultLayoutModule } from './share/layout/default-layout/default-layout.module';
import { DealerService } from './demo/service/dealer.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseOptions } from 'firebase/app';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

export const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyCPCxdnlURoz1n8TDjQdXY1iprn82K4HLs",
    authDomain: "nha-trang-ntne.firebaseapp.com",
    projectId: "nha-trang-ntne",
    storageBucket: "nha-trang-ntne.appspot.com",
    messagingSenderId: "422044912492",
    appId: "1:422044912492:web:2e34eada0c4670e1c0c149",
    measurementId: "G-KQ4B9SLRN9"
};

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        DefaultLayoutModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        BrowserAnimationsModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, BlogService, DealerService, PriceService,
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideStorage(() => getStorage())
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
