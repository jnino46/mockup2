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
        
          this.wishlists = result;
          console.log(result);

      },
      error =>{
        this.wishlists = [
          {city:'Medellin', url_photo:'https://www.mckinsey.com/co/~/media/McKinsey/Locations/South%20America/Colombia/Medellin/Colombia_Medellin_thumb_GettyImages874015172_1536x1536.ashx', trips:'35', details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
          {city:'Cali', url_photo:'https://www.avianca.com/content/dam/avianca_new/destinos/semana/clo/1-porque-visitarla/destino-cali-colombia-para-conocer-el-cerro-cristo-rey.jpg', trips:'15', details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
          {city:'Bogotá', url_photo:'https://uberblogapi.10upcdn.com/wp-content/uploads/2018/09/CO_X-lugares-para-visitar-en-Bogota%CC%81-que-no-te-puedes-perder--1080x540.jpg', trips:'24', details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
          {city:'Tunja', url_photo:'https://www.uniboyaca.edu.co/sites/default/files/inline-images/catedral_0.jpg', trips:'4', details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
          {city:'Bucaramanga', url_photo:'https://www.uniboyaca.edu.co/sites/default/files/inline-images/catedral_0.jpg', trips:'4', details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'}
        ];
      }
    );
  }
}
