import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Receita } from '../model/receita';
import { ReceitaComponent } from '../receita/receita.component';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-receitas-list',
  templateUrl: './receitas-list.component.html',
  styleUrls: ['./receitas-list.component.css']
})
export class ReceitasListComponent implements OnInit {

  path = "/perfect-car/receitas/";
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  filter = new FormControl('');
  receitas: Receita[] = [];

  constructor(private restService: RestService,
    private router: Router) { 
    this.buscaReceitas();
    this.refreshReceitas();
  }

  ngOnInit(): void {
  }

  buscaReceitas() {
    this.receitas = [];
    this.restService.get(this.path).subscribe((data) => {
      if (data) {
        Object.values(data).forEach((usuario) => {
          this.receitas.push(usuario)
        });  
        this.collectionSize = this.receitas.length;     
      }
    }, error => {
    });
  }

  refreshReceitas() {
    this.receitas = this.receitas
      .map((receita, i) => ({id: i + 1, ...receita}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  editaReceita(receita: Receita) {
    this.router.navigate(['/receitas', { id: receita.id }]);
  }

  apagaReceita(id: number) {
    this.restService.delete(this.path + id).subscribe((data) => {
      this.buscaReceitas();
    });
  }

}
