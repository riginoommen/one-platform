import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './mod-handovers/home/home.component';
import { ModDetailsComponent } from './mod-handovers/mod-details/mod-details.component';
import { ManageHandoverComponent } from './mod-handovers/manage-handover/manage-handover.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/mod-handovers',
    pathMatch: 'full',
  },
  {
    path: 'mod-handovers',
    component: HomeComponent,
  },
  {
    path: 'mod-handovers/details',
    component: ModDetailsComponent
  },
  {
    path: 'mod-handovers/new',
    component: ManageHandoverComponent,
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
