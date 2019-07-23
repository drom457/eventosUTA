import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-conferencia',
  templateUrl: './conferencia.component.html',
  styleUrls: ['./conferencia.component.css'],
  providers: [DataService]
})
export class ConferenciaComponent implements OnInit {
  idCed:string;
  presentacion:any;
  lat: number;
  lng: number;
  zoom:number=19;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _dataService:DataService) {
      this._route.queryParams.subscribe(params => {
        this.presentacion = params;
        this.lat=parseFloat(this.presentacion.coord_x);
      this.lng=parseFloat(this.presentacion.coord_y);
      });
      this.idCed=this.presentacion.documento_identificacion;
     }
    
  ngOnInit() {

  }
}
