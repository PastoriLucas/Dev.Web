import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { RootComponent } from './root/root.component';

import { AppfrComponent} from './appfr/appfr.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { PresentationComponent } from './presentation/presentation.component';
import { EventComponent } from './event/event.component';
import { EventidComponent } from './eventid/eventid.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {RegisterComponent} from './register/register.component';


const appRoutes: Routes = [
  { path: 'fr/gallery', component: GalleryComponent },
  { path: 'fr/gallery/:id', component: GalleryDetailComponent },
  { path: 'fr/presentation', component: PresentationComponent },
  { path: 'fr/event', component: EventComponent },
  { path: 'fr/contact', component: ContactComponent },
  { path: 'fr/home', component: HomeComponent },
  { path: 'fr/event/:id', component: EventidComponent },
  { path: 'fr/admin', component: AdminComponent },
  { path: 'fr/login', component: LoginComponent },
  { path: 'fr/inscription', component: InscriptionComponent},
  { path: 'fr/register', component: RegisterComponent},
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
      appRoutes, {enableTracing: true}
    ),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    GalleryComponent,
    PresentationComponent,
    ContactComponent,
    EventComponent,
    EventidComponent,
    HomeComponent,
    RootComponent,
    GalleryDetailComponent,
    AdminComponent,
    LoginComponent,
    InscriptionComponent,
    AppfrComponent,
    AppfrComponent
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
