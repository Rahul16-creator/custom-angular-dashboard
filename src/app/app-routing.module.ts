import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotFoundComponent } from './Error/pagenot-found/pagenot-found.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "**", component: PagenotFoundComponent ,data:{message:"PAGE NOT FOUND !!"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
