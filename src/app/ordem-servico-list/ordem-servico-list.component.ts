import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdemServico } from '../model/ordem-servico';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-ordem-servico-list',
  templateUrl: './ordem-servico-list.component.html',
  styleUrls: ['./ordem-servico-list.component.css']
})
export class OrdemServicoListComponent implements OnInit {

  path = "/perfect-car/ordens-servico/";
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  filter = new FormControl('');
  ordensServico: OrdemServico[] = [];

  constructor(private restService: RestService,
    private router: Router) { 
    this.buscaOrdens();
    this.refreshOrdens();
  }

  ngOnInit(): void {
  }

  buscaOrdens() {
    this.restService.get(this.path).subscribe((data) => {
      if (data) {
        Object.values(data).forEach((ordemServico) => {
          this.ordensServico.push(ordemServico)
        });  
        this.collectionSize = this.ordensServico.length;     
      }
    }, error => {
    });
  }

  refreshOrdens() {
    this.ordensServico = this.ordensServico
      .map((ordem, i) => ({id: i + 1, ...ordem}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  editaOrdem(ordemServico: OrdemServico) {
    this.router.navigate(['/ordem-servico', { id: ordemServico.id }]);
  }

  apagaOrdem(id: number) {
    this.restService.delete(this.path + id).subscribe(() => {
      this.buscaOrdens();
    });
  }

}
