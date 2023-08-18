import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './components/events/events.component'
import { PalestrantsComponent } from './components/palestrants/palestrants.component'

import { PerfilComponent } from './components/user/perfil/perfil.component'

import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ContactsComponent } from './components/contacts/contacts.component'

import { EventsDetailsComponent } from './components/events/events-details/events-details.component';

import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { EventsListComponent } from './components/events/events-list/events-list.component';

const routes: Routes = [
  { path: 'events', redirectTo: 'events/List' },
  {
    path: 'events', component: EventsComponent,
    children: [
      { path: 'details/:id', component: EventsDetailsComponent },
      { path: 'details', component: EventsDetailsComponent },
      { path: 'list', component: EventsListComponent },
    ]
  },
  { path: 'palestrants', component: PalestrantsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contacts', component: ContactsComponent },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'registration', component: RegistrationComponent },
    ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
