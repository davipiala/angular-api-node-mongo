import { Component, OnInit } from '@angular/core';
import { Poc } from '../classes/poc'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
    POCS: Poc[] = [
    {
      codigoOpp: 'BKL11',
      valorOpp: 12000,
      dataAbertura: null,
      dataFechamento: null,
      sponsor: 'Um Sponsor Qualquer',
      vendedor: 'Guilherme Borges',
      manager: 'Lenadro Vieira',
      arquiteto: null,
      scs: null,
      notes: null
  
    },
    {
      codigoOpp: 'BKL11',
      valorOpp: 12000,
      dataAbertura: null,
      dataFechamento: null,
      sponsor: 'Um Sponsor Qualquer',
      vendedor: 'Guilherme Borges',
      manager: 'Lenadro Vieira',
      arquiteto: null,
      scs: null,
      notes: null
    }];
  public selectOptions: Poc[];
  constructor() { }

  ngOnInit() {
    this.selectOptions = this.POCS;
  }

}
