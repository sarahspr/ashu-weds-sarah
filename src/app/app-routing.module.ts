import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TravelComponent } from './pages/travel/travel.component';
import { VenueComponent } from './pages/venue/venue.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'events', component: EventsComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'venue-and-accommodation', component: VenueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}