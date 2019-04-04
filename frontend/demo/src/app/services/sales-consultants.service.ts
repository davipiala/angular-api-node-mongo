import { Injectable } from '@angular/core';
import { SalesConsultant } from '../classes/sales-consultant'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SalesConsultantsService {


  endpoint = 'http://localhost:4200/api/';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'})};


  constructor(private http: HttpClient) {}

  public load():Observable<SalesConsultant[]>{
    return this.http.get<SalesConsultant[]>(this.endpoint + 'scs');
  };



    
  
  public getSC(id:number):Observable<any>{
    return this.http.get(this.endpoint + '/scs').pipe(map(this.extractData));
  }
  public add(sc:SalesConsultant){
    
  }
  public remove(sc:SalesConsultant){

  }
  public update(sc:SalesConsultant){

  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
