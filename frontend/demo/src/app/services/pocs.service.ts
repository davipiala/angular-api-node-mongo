import { Injectable } from '@angular/core';
import { Poc } from '../classes/poc'
@Injectable({
  providedIn: 'root'
})
export class PocsService {

  constructor() { }


  public load():Poc[]{

    return null;
  }
  public getPoc(id:number):Poc{
    return null;
  }
  public update(poc:Poc){

  }
  public remove(poc:Poc){

  }
  public add(poc:Poc){
    
  }
}
