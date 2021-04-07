import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../helpers/base.component';
import { Despesa } from '../model/despesa';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent extends BaseComponent<Despesa> implements OnInit {

  despesa = {} as Despesa;

  constructor(restService: RestService,
    route: ActivatedRoute) {
      super(restService, route, '/perfect-car/despesas/');
     }

  ngOnInit(): void {
    super.ngOnInit();
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.findDespesa(id);
      this.isEdit = true;
    }
  }

  findDespesa(id: string) {
    this.restService.get(this.path + id).subscribe((data) => {
       this.despesa = data as Despesa;
    });
   }
 
   addDespesa() {
    super.addEntity(this.despesa);
   }

}