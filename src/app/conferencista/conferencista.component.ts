import { Component, OnInit } from '@angular/core';
import { Conferencista } from '../../models/conferencista';
import { ConferencistaService } from '../services/conferencista.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';


@Component({
  selector: 'app-conferencista',
  templateUrl: './conferencista.component.html',
  styleUrls: ['./conferencista.component.css'],
  providers: [ConferencistaService]
})
export class ConferencistaComponent implements OnInit {
  public conferencistas: Conferencista;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _conferencistaService: ConferencistaService) {

  }

  ngOnInit() {
    this._conferencistaService.getConferencistas().subscribe(
      response => {
        this.conferencistas = response;
      }
     
    );
  }
  private encriptacion:any;
  btnClick(documento_identificacion:string){
    const md5 = new Md5();
    this.encriptacion=md5.appendStr(documento_identificacion).end();
    this._router.navigate(['/presentacionConferencia', this.encriptacion]); 
  }
}
