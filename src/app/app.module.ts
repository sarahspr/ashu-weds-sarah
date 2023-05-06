import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { EventsComponent } from './pages/events/events.component';
import { TravelComponent } from './pages/travel/travel.component';
import { VenueComponent } from './pages/venue/venue.component';
import { SideNavComponent } from './layouts/side-nav/side-nav.component';
import { TopNavComponent } from './layouts/top-nav/top-nav.component';

@NgModule({
  // TODO: convert to standalone mudules and lazy load the routes/pages
  declarations: [AppComponent, HomepageComponent, FooterComponent, EventsComponent, TravelComponent, VenueComponent],
  imports: [BrowserModule, AppRoutingModule, SideNavComponent, TopNavComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
