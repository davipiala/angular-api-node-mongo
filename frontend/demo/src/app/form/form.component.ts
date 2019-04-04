import { Component, OnInit, Inject } from '@angular/core';
import { SalesConsultant } from '../classes/sales-consultant'
import { SalesConsultantsService } from '../services/sales-consultants.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  

  public selectOptions: SalesConsultant[];

  constructor(private service:SalesConsultantsService) {
    
   }
  
  ngOnInit() {
    this.service.load().subscribe(response =>
    {
      this.selectOptions = response.map<SalesConsultant>(item =>
        { return new SalesConsultant(
            item.nome,
            item.email);
        });
      });
   }
}
