import { Injectable } from '@angular/core';
import { SalesConsultant } from '../classes/sales-consultant'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SalesConsultantsService {


  endpoint = 'http://localhost:3000/pocs/';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'})};


  constructor(private http: HttpClient) {}

  public load():Observable<any>{
    return this.http.get(this.endpoint + 'pocs').pipe(map(this.extractData));
    
  }
  public getSC(id:number){

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
