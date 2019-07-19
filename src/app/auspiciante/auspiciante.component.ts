import { Component, OnInit } from '@angular/core';
import { Auspiciante } from '../../models/auspiciante'
import { AuspicianteService } from '../services/auspiciante.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-auspiciante',
  templateUrl: './auspiciante.component.html',
  styleUrls: ['./auspiciante.component.css'],
  providers: [Auspiciante]
})
export class AuspicianteComponent implements OnInit {
  public conferencistas:Auspiciante;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _auspicianteService:AuspicianteService) { 

  }

  ngOnInit() {
    this._auspicianteService.getConferencistas().subscribe(
      response=>{
        this.conferencistas=response;
      }
    );
    
  }


}
