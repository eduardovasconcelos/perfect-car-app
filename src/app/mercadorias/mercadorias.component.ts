import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Mercadoria } from '../model/mercadoria';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../helpers/base.component';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent extends BaseComponent<Mercadoria> implements OnInit {

  mercadoria = {} as Mercadoria ;

  constructor(restService: RestService,
    route: ActivatedRoute) {
      super(restService, route, '/perfect-car/mercadorias/');
     }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.findMercadoria(id);
      this.isEdit = true;
    }
  }

  findMercadoria(id: string) {
    this.restService.get(this.path + id).subscribe((data) => {
       this.mercadoria = data as Mercadoria;
    });
   }
 
   addMercadoria() {
     super.addEntity(this.mercadoria);
   }
}
