import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { AgGridModule } from 'ag-grid-angular';
import { DisplayComponent } from './display/display.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { EventsComponent } from './events/events.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { NavbarNewComponent } from './navbar-new/navbar-new.component';
import { GoodlookingformComponent } from './goodlookingform/goodlookingform.component';
//import { MaterialModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    RegistrationFormComponent,
    NavbarComponent,
    SidebarComponent,
    ProfileComponent,
    EventsComponent,
    EventdetailsComponent,
    NavbarNewComponent,
    GoodlookingformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
