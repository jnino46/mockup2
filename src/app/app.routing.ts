import { ModuleWithProviders  } from "@angular/core";
import { Routes, RouterModule  } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { TripsListComponent } from './trips-list/trips-list.component';
import { WishlistComponent } from "./wishlist/wishlist.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'trips', component: TripsListComponent},
    {path: 'wishlist', component: WishlistComponent},
    {path: '**', component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
