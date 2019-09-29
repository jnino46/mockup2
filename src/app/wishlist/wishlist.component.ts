import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { TripsService } from "../services/trips.service";
import { Wishlist } from "../models/wishlist";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  providers: [TripsService]
})
export class WishlistComponent implements OnInit {
  public titulo: string;
  public wishlists : Wishlist[];
  constructor(
    private _route: ActivatedRoute,
    private _router : Router,
    private _tripService : TripsService
  ) { 
    this.titulo = 'Listado de Trips';

  }

  ngOnInit() {
    console.log('TripsList charged');
    this._tripService.getWishlist().subscribe(
      result => {
        //if(result.code != 200 )
          //console.log(result.code);
        //else
          this.wishlists = result;
          console.log(result);
      },
      error =>{
        console.log(<any>error)
      }
    );
  }
}
