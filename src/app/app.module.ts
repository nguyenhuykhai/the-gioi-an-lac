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

// Setting Firebase Storage
// import { FirebaseOptions } from 'firebase/app';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { getStorage, provideStorage } from '@angular/fire/storage';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';

// export const firebaseConfig: FirebaseOptions = {
//     apiKey: 'AIzaSyCrH3nRPoIYgBtcCMdFwtu4IgayGz5EXps',
//     authDomain: 'unicourse-f4020.firebaseapp.com',
//     projectId: 'unicourse-f4020',
//     storageBucket: 'unicourse-f4020.appspot.com',
//     messagingSenderId: '571256265329',
//     appId: '1:571256265329:web:1390beeaed0b4e767819d0',
// };

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule, DefaultLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, BlogService, DealerService, PriceService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
