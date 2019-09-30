import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from "./app.routing";

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TripsListComponent } from './trips-list/trips-list.component';
import { ErrorComponent } from './error/error.component';
import { BanerLeftComponent } from './baner-left/baner-left.component';
import { HttpModule } from '@angular/http';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TripsListComponent,
    ErrorComponent,
    BanerLeftComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
