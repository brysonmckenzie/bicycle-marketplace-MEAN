import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from "./api.service";
import { HttpModule } from "@angular/http";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowseComponent } from './dashboard/browse/browse.component';
import { ListingComponent } from './dashboard/listing/listing.component';


@NgModule({
  declarations: [
     AppComponent,
     LoginComponent,
     DashboardComponent,
     BrowseComponent,
     ListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
