import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './mod-handovers/home/home.component';
import { ModDetailsComponent } from './mod-handovers/mod-details/mod-details.component';
import { ManageHandoverComponent } from './mod-handovers/manage-handover/manage-handover.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'details/:handover_id',
    component: ModDetailsComponent
  },
  {
    path: 'new',
    component: ManageHandoverComponent,
  },
  {
    path: 'edit/:handover_id',
    component: ManageHandoverComponent,
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
