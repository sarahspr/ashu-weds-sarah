import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TravelComponent } from './pages/travel/travel.component';
import { VenueComponent } from './pages/venue/venue.component';

// TODO: Lazy load the page components.
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'events', component: EventsComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'venue-and-accommodation', component: VenueComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollOffset: [0, 40],
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
