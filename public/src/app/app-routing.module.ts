import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BrowseComponent } from './dashboard/browse/browse.component';
import { ListingComponent } from './dashboard/listing/listing.component';

const routes: Routes = [
 
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children:[
      { path: 'browse', component: BrowseComponent },
      { path: 'listings', component: ListingComponent },
   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
