import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotoService } from './pages/service/photo.service';
import { BlogService, PriceService } from './pages/service';
import { DefaultLayoutModule } from './share/layout/default-layout/default-layout.module';
import { DealerService } from './pages/service/dealer.service';
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
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        DefaultLayoutModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        BrowserAnimationsModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        PhotoService, BlogService, DealerService, PriceService,
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideStorage(() => getStorage())
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
