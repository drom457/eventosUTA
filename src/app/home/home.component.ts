import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  btnClick= function () {
    this.router.navigateByUrl('/conferencista'); 
}

btnClick2= function () {
  this.router.navigateByUrl('/galeria');
  
}
btnClick1= function () {
  this.router.navigateByUrl('/auspiciante');
  
}
btnClick4= function () {
  this.router.navigateByUrl('/informacion');
  
}





}
