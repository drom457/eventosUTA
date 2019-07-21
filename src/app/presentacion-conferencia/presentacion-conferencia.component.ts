import { Component, OnInit} from '@angular/core';
import { PresentacionHibrida } from '../../models/presentacionHibrida';
import { ActivatedRoute, Router } from '@angular/router';
import { PresentacionHibridaService } from '../services/presentacionHibrida.service';


@Component({
  selector: 'app-presentacion-conferencia',
  templateUrl: './presentacion-conferencia.component.html',
  styleUrls: ['./presentacion-conferencia.component.css']
})
export class PresentacionConferenciaComponent implements OnInit {
  public presentacionHibrida: PresentacionHibrida;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _presentacionService:PresentacionHibridaService
  ) { }
  private expositor:any;
  ngOnInit() {
    //this.expositor=this._presentacionService.getExpositor(this._route.snapshot.params.id);
    //console.log(this.expositor); 
    this._presentacionService.saludar();
  }

}
