import { Component, OnInit } from '@angular/core';
import { SalesConsultant } from '../classes/sales-consultant'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  SALES_CONSULTANTS: SalesConsultant[] = [
    {
      nome: 'Davi Piala dos Santos',
      email: 'davi.piala@oracle.com'
    },
    {
      nome: 'Fernando Costa',
      email: 'fernando.d.costa'
    }];
    public selectOptions: SalesConsultant[];
  constructor() { }

  ngOnInit() {
    this.selectOptions = this.SALES_CONSULTANTS;
  }

}
