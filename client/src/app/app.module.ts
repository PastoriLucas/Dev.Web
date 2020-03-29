import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule, Routes} from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { EventidComponent } from './eventid/eventid.component';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { adminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:id', component: GalleryDetailComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'event', component: EventComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'event/:id', component: EventidComponent},
  { path: 'admin', component: adminComponent}
  /*{ path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true }
    ),
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    GalleryComponent,
    PresentationComponent,
    ContactComponent,
    EventComponent,
    HomeComponent,
    RootComponent,
    GalleryDetailComponent
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
