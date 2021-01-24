import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';


//ANGULAR COMPONENT

import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainchartComponent } from './dashboard/mainchart/mainchart.component';
import { RevenueChartComponent } from './dashboard/revenue-chart/revenue-chart.component';
import { YearschartComponent } from './dashboard/yearschart/yearschart.component';
import { PagenotFoundComponent } from './Error/pagenot-found/pagenot-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    MainchartComponent,
    RevenueChartComponent,
    YearschartComponent,
    PagenotFoundComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
