import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {path:"", component:RegistrationFormComponent},
  {path:"display", component:DisplayComponent},
  {path:"events", component:EventsComponent},
  {path:"profile", component:ProfileComponent},
  {path:"eventdetails", component:EventdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
