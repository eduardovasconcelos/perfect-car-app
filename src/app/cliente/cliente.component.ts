import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../helpers/base.component';
import { Cliente } from '../model/cliente';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent extends BaseComponent<Cliente> implements OnInit {

  cliente = {} as Cliente;

  constructor(restService: RestService,
    route: ActivatedRoute) {
      super(restService, route, '/perfect-car/clientes/');
     }

  ngOnInit(): void {
    super.ngOnInit();
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.findCliente(id);
      this.isEdit = true;
    }
  }

  findCliente(id: string) {
      this.restService.get(this.path + id).subscribe((data) => {
        this.cliente = data as Cliente;
     });
  }

  addCliente() {
    super.addEntity(this.cliente);
    this.cliente = {} as Cliente;
  }

}
