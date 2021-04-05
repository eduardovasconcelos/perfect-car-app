import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Despesa } from '../model/despesa';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-despesas-list',
  templateUrl: './despesas-list.component.html',
  styleUrls: ['./despesas-list.component.css']
})
export class DespesasListComponent implements OnInit {

  path = "/perfect-car/despesas/";
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  filter = new FormControl('');
  despesas: Despesa[] = [];

  constructor(private restService: RestService,
    private router: Router) { 
    this.buscaDespesas();
    this.refreshDespesas();
  }

  ngOnInit(): void {
  }

  buscaDespesas() {
    this.despesas = [];
    this.restService.get(this.path).subscribe((data) => {
      if (data) {
        Object.values(data).forEach((usuario) => {
          this.despesas.push(usuario)
        });  
        this.collectionSize = this.despesas.length;     
      }
    }, error => {
    });
  }

  refreshDespesas() {
    this.despesas = this.despesas
      .map((despesa, i) => ({id: i + 1, ...despesa}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  editaDespesa(despesa: Despesa) {
    this.router.navigate(['/despesas', { id: despesa.id }]);
  }

  apagaDespesa(id: number) {
    this.restService.delete(this.path + id).subscribe((data) => {
      this.buscaDespesas();
    });
  }

}
