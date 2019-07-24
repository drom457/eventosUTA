import { Component, OnInit } from '@angular/core';
import { PresentacionHibridaService } from '../services/presentacionHibrida.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Expositor } from '../../models/expositor';
import { PresentacionHibrida } from '../../models/presentacionHibrida';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs/Observable';
import { Conferencia } from '../../models/conferencia';


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css'],
  providers: [PresentacionHibridaService, DataService]
})
export class PresentacionComponent implements OnInit {
  public expositor: Expositor;
  public presentaciones: PresentacionHibrida;
  public cantidad: number = 200;
  public idCed: any;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _presentacionService: PresentacionHibridaService,
    private _dataService: DataService) {
      this._route.queryParams.subscribe(params => {
        this.idCed = params.documento_identificacion;
      });
  }

  ngOnInit() {
    this._presentacionService.getExpositor(this.idCed).subscribe(
      response => {
        this.expositor = response;
      }
    );
    this._presentacionService.getPresentacion(this.idCed).subscribe(
      response => {
        this.presentaciones = response;
      },
      error => {
        this.cantidad = error.status;
      }
    );

  }
  conferencia:Conferencia;
  btnClick(presentacion:PresentacionHibrida) {
    this.conferencia=new Conferencia(this.idCed,presentacion.f_h_inicio,presentacion.f_h_fin,presentacion.titulo,presentacion.descripcion,presentacion.nombre, presentacion.ubicacion,presentacion.coord_x,presentacion.coord_y,this.expositor[0].Expositor);
    this._router.navigate(['conferencia'],{queryParams:this.conferencia,skipLocationChange: true}); 
  }

}
