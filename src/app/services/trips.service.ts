import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Trip } from "../models/trip";
import { GLOBAL } from "./global.service";
@Injectable({
  providedIn: 'root'
})
export class TripsService {
  public url : string;
  constructor(
    public _http: Http
    ) { 
      this.url = GLOBAL.url;
    }
    
    getTrips(){
      console.log(this.url+'/trip');
      return this._http.get(this.url+'/trip').map(res=>res.json());
    }
    
    getWishlist(){
      console.log(this.url+'/wishlist');
      return this._http.get(this.url+'/wishlist').map(res=>res.json());
    }
}
