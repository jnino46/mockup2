import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baner-left',
  templateUrl: './baner-left.component.html',
  styleUrls: ['./baner-left.component.css']
})
export class BanerLeftComponent implements OnInit {
  public titulo : string;
  constructor() {
    this.titulo = "Smart Filters"

   }

  ngOnInit() {
  }

}
