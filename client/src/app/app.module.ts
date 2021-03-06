import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';

import { FileComponent } from './file/file.component';

/* *****************************************************************************************
                                        FRENCH
 ******************************************************************************************/
import { FrHomeComponent } from './french/home/home.component';
import { FrGalleryComponent } from './french/gallery/gallery.component';
import { FrGalleryDetailComponent } from './french/gallery-detail/gallery-detail.component';
import { FrPresentationComponent } from './french/presentation/presentation.component';
import { FrEventComponent } from './french/event/event.component';
import { FrEventidComponent } from './french/eventid/eventid.component';
import { FrContactComponent } from './french/contact/contact.component';
import { FrLoginComponent } from './french/login/login.component';
import { FrInscriptionComponent } from './french/inscription/inscription.component';
import { FrFooterComponent } from './french/footer/footer.component';
import { FrHeaderComponent} from './french/header/header.component';

/* *****************************************************************************************
                                        ENGLISH
 ******************************************************************************************/
import { EnHomeComponent } from './english/home/home.component';
import { EnGalleryComponent } from './english/gallery/gallery.component';
import { EnGalleryDetailComponent } from './english/gallery-detail/gallery-detail.component';
import { EnPresentationComponent } from './english/presentation/presentation.component';
import { EnEventComponent } from './english/event/event.component';
import { EnEventidComponent } from './english/eventid/eventid.component';
import { EnContactComponent } from './english/contact/contact.component';
import { EnLoginComponent } from './english/login/login.component';
import { EnInscriptionComponent } from './english/inscription/inscription.component';
import { EnFooterComponent } from './english/footer/footer.component';
import { EnHeaderComponent} from './english/header/header.component';

/* *****************************************************************************************
                                        DUTCH
 ******************************************************************************************/
import { NlHomeComponent } from './dutch/home/home.component';
import { NlGalleryComponent } from './dutch/gallery/gallery.component';
import { NlGalleryDetailComponent } from './dutch/gallery-detail/gallery-detail.component';
import { NlPresentationComponent } from './dutch/presentation/presentation.component';
import { NlEventComponent } from './dutch/event/event.component';
import { NlEventidComponent } from './dutch/eventid/eventid.component';
import { NlContactComponent } from './dutch/contact/contact.component';
import { NlLoginComponent } from './dutch/login/login.component';
import { NlInscriptionComponent } from './dutch/inscription/inscription.component';
import { NlFooterComponent } from './dutch/footer/footer.component';
import { NlHeaderComponent} from './dutch/header/header.component';

import {AgmCoreModule} from '@agm/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'admin', component: FileComponent},
  /*FRENCH*/
  { path: 'fr/gallery/:style', component: FrGalleryComponent },
  { path: 'fr/gallery/:style/:id', component: FrGalleryDetailComponent },
  { path: 'fr/presentation', component: FrPresentationComponent },
  { path: 'fr/event', component: FrEventComponent },
  { path: 'fr/contact', component: FrContactComponent },
  { path: 'fr/home', component: FrHomeComponent },
  { path: 'fr/event/:id', component: FrEventidComponent },
  { path: 'fr/login', component: FrLoginComponent },
  { path: 'fr/inscription', component: FrInscriptionComponent},
  /*ENGLISH*/
  { path: 'en/gallery/:style', component: EnGalleryComponent },
  { path: 'en/gallery/:style/:id', component: EnGalleryDetailComponent },
  { path: 'en/presentation', component: EnPresentationComponent },
  { path: 'en/event', component: EnEventComponent },
  { path: 'en/contact', component: EnContactComponent },
  { path: 'en/home', component: EnHomeComponent },
  { path: 'en/event/:id', component: EnEventidComponent },
  { path: 'en/login', component: EnLoginComponent },
  { path: 'en/inscription', component: EnInscriptionComponent},
  /*DUTCH*/
  { path: 'nl/gallery/:style', component: NlGalleryComponent },
  { path: 'nl/gallery/:style/:id', component: NlGalleryDetailComponent },
  { path: 'nl/presentation', component: NlPresentationComponent },
  { path: 'nl/event', component: NlEventComponent },
  { path: 'nl/contact', component: NlContactComponent },
  { path: 'nl/home', component: NlHomeComponent },
  { path: 'nl/event/:id', component: NlEventidComponent },
  { path: 'nl/login', component: NlLoginComponent },
  { path: 'nl/inscription', component: NlInscriptionComponent},
  { path: '**',
    redirectTo: 'fr/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: false}
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCq4TvPKogUIilCh_38VgrV4URD5o1a8xk'
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule
  ],
  declarations: [
    AppComponent,
    FileComponent,
    /*FRENCH*/
    FrGalleryComponent,
    FrPresentationComponent,
    FrContactComponent,
    FrEventComponent,
    FrEventidComponent,
    FrHomeComponent,
    FrGalleryDetailComponent,
    FrLoginComponent,
    FrInscriptionComponent,
    FrFooterComponent,
    FrHeaderComponent,
    /*ENGLISH*/
    EnGalleryComponent,
    EnPresentationComponent,
    EnContactComponent,
    EnEventComponent,
    EnEventidComponent,
    EnHomeComponent,
    EnGalleryDetailComponent,
    EnLoginComponent,
    EnInscriptionComponent,
    EnFooterComponent,
    EnHeaderComponent,
    /*DUTCH*/
    NlGalleryComponent,
    NlPresentationComponent,
    NlContactComponent,
    NlEventComponent,
    NlEventidComponent,
    NlHomeComponent,
    NlGalleryDetailComponent,
    NlLoginComponent,
    NlInscriptionComponent,
    NlFooterComponent,
    NlHeaderComponent,
  ],
  exports: [RouterModule, FrFooterComponent, FrHeaderComponent],
  providers: [CookieService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
