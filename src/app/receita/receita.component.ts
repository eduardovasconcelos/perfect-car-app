import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../helpers/base.component';
import { Receita } from '../model/receita';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent extends BaseComponent<Receita> implements OnInit {
  receita = {} as Receita;

  constructor(restService: RestService,
    route: ActivatedRoute) {
      super(restService, route, '/perfect-car/receitas/');
     }

  ngOnInit(): void {
    this.mensagem = false;
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.findReceita(id);
      this.isEdit = true;
    }
  }

  findReceita(id: string) {
   this.restService.get(this.path + id).subscribe((data) => {
      this.receita = data as Receita;
   });
  }

  addReceita() {
    super.addEntity(this.receita);
  }
}
