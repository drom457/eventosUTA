import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
 




@Injectable()
export class PresentacionHibridaService {
    public url:string;
    constructor(
        public _http:HttpClient
    ){
        this.url=GLOBAL.url;
    }

    getPresentacion(documento_identificacion:string):Observable<any> {
        let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'/presentacionHibrida/'+documento_identificacion+'/conferencia',{headers:headers});
    }
    getExpositor(documento_identificacion:string){
        let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'/obtenerConferencista/'+documento_identificacion,{headers:headers});
    }
}