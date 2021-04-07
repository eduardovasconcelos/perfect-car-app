import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  path = '/perfect-car/clientes/';
  clientes : Cliente[] = [];
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  filter = new FormControl('');

  constructor(private restService: RestService,
    private router: Router) { }

  ngOnInit(): void {
    this.buscaClientes();
  }

  refreshClientes() {
    this.clientes = this.clientes
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  buscaClientes() {
    this.restService.get(this.path).subscribe((data) => {      
      if (data) {
        Object.values(data).forEach((usuario) => {
          this.clientes.push(usuario)
        });  
      }
    }, error => {
    });
  }

  editaCliente(cliente: Cliente) {
    this.router.navigate(['/clientes', { id: cliente.id }]);
  }

  apagaCliente(id: number) {
    this.restService.delete(this.path + id).subscribe((data) => {
      this.buscaClientes();
    });
  }
}
