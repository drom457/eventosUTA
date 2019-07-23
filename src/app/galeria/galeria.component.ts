import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

declare var require: any

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  imagenes: Array<any> = []

  constructor() {
    for (var i = 1; i < 18; i++) {
      const path = 'assets/img/Imagen' + i + '.jpg';
      if (this.UrlExists(path)) {
        this.imagenes.push('Imagen' + i + '.jpg');
      } else {
        
      }
    }

  }

  UrlExists(url) {
    if (url) {
      var req = new XMLHttpRequest();
      req.open('HEAD', url, false);
      req.send();
      return true;
    } else {
      return false;
    }
  }

  //sudo npm install fs
  //npm install express

  ngOnInit() {
  }

}
