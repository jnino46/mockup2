import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { TripsService } from "../services/trips.service";
import { Trip } from "../models/trip";


@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css'],
  providers:[TripsService]
})
export class TripsListComponent implements OnInit {
  public titulo: string;
  public trips : Trip[];
  constructor(
    private _route: ActivatedRoute,
    private _router : Router,
    private _tripService : TripsService
  ) { 
    this.titulo = 'Listado de Trips';

  }

  ngOnInit() {
    console.log('TripsList charged');
    this._tripService.getTrips().subscribe(
      result => {
        //if(result.code != 200 )
          //console.log(result.code);
        //else
          this.trips = result;
          //console.log(result);
      },
      error =>{
        console.log(<any>error)
      }
    );
  }

}
