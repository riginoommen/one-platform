import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './mod-handovers/home/home.component';
import { ManageHandoverComponent } from './mod-handovers/manage-handover/manage-handover.component';
import { ModDetailsComponent } from './mod-handovers/mod-details/mod-details.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule( {
  declarations: [
    AppComponent,
    ManageHandoverComponent,
    ModDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
