import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';





@Injectable()
export class AuspicianteService {
    public url:string;
    constructor(public _http:HttpClient){
        this.url=GLOBAL.url;
    }

    getConferencistas():Observable<any> {
        let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'/auspiciante',{headers:headers});
    }
}