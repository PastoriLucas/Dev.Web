import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule, Routes} from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'event', component: EventComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
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
    )
  ],
  declarations: [
    AppComponent,
    GalleryComponent,
    PresentationComponent,
    ContactComponent,
    EventComponent,
    HomeComponent,
    RootComponent
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
