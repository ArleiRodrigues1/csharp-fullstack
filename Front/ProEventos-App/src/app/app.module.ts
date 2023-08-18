import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventsComponent } from './components/events/events.component';
import { PalestrantsComponent } from './components/palestrants/palestrants.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';

import { EventService } from './services/event.service';

import { DateFormatPipe } from './helpers/DateFormat.pipe';
import { EventsDetailsComponent } from './components/events/events-details/events-details.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EventsListComponent } from './components/events/events-list/events-list.component';
import { TitleComponent } from './shared/title/title.component';
import { NavComponent } from './shared/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EventsComponent,
    PalestrantsComponent,
    ContactsComponent,
    DashboardComponent,
    PerfilComponent,
    TitleComponent,
    DateFormatPipe,
    EventsDetailsComponent,
    EventsListComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    }),
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
