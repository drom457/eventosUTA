import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})


export class InformacionComponent implements OnInit {
  title: string = 'Ubicación del Congreso';
  
  lat: number = -1.268775;
  lng: number = -78.624101;
  constructor() { }

  ngOnInit() {
  }

}
