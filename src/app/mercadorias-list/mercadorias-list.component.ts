import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Mercadoria } from '../model/mercadoria';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-mercadorias-list',
  templateUrl: './mercadorias-list.component.html',
  styleUrls: ['./mercadorias-list.component.css']
})
export class MercadoriasListComponent implements OnInit {

  path = "/perfect-car/mercadorias/";
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  filter = new FormControl('');
  mercadorias: Mercadoria[] = [];

  constructor(private restService: RestService,
    private router: Router) { 
    this.refreshMercadorias();
  }

  ngOnInit(): void {
    this.buscaMercadorias();
  }

  buscaMercadorias() {
    this.mercadorias = [];
    this.restService.get(this.path).subscribe((data) => {
      if (data) {
        Object.values(data).forEach((mercadoria) => {
          this.mercadorias.push(mercadoria);
        });
      }
    }, error => {
    });
  }

  refreshMercadorias() {
    this.mercadorias = this.mercadorias
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  editMercadoria(mercadoria: Mercadoria) {
    this.router.navigate(['/mercadorias', { id: mercadoria.id }]);
  }

  apagaMercadoria(id: number) {
    this.restService.delete(this.path + id).subscribe((data) => {
      this.buscaMercadorias();
    });
  }

}
