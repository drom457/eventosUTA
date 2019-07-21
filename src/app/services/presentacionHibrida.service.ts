import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';





@Injectable()
export class PresentacionHibridaService {
    public url: string;
    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }
    saludar(){
        console.log('Hola');
    }

}