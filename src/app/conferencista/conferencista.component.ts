import { Component, OnInit } from '@angular/core';
import { Conferencista } from '../../models/conferencista'
import { ConferencistaService } from '../services/conferencista.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-conferencista',
  templateUrl: './conferencista.component.html',
  styleUrls: ['./conferencista.component.css'],
  providers: [ConferencistaService]
})
export class ConferencistaComponent implements OnInit {
  public conferencistas:Conferencista;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _conferencistaService:ConferencistaService) { 

  }

  ngOnInit() {
    this._conferencistaService.getConferencistas().subscribe(
      response=>{
        this.conferencistas=response;
      }
    );
    
  }


}
