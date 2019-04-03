import { Injectable } from '@angular/core';
import { Arquiteto} from '../classes/arquiteto'

@Injectable({
  providedIn: 'root'
})
export class ArquitetosService {

  constructor() { }

  public load():Arquiteto[]{
    return null;
  }
  public get(id:number):Arquiteto{
    return null;
  }
  public update(arquiteto:Arquiteto){

  }
  public add(arquiteto:Arquiteto){

  }
  public remove(arquiteto:Arquiteto){

  }
}
