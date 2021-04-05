import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receita } from '../model/receita';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {
  path = '/perfect-car/receitas/';  
  receita = {} as Receita ;
  isEdit: boolean = false;

  constructor(private restService: RestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
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
    if (this.isEdit) {
      this.restService.patch(this.path, this.receita).subscribe(() => {
        this.receita = null;
        this.router.navigate(["/receitas-list"]);
      }, error => {
        console.log('ERRO');
      });
    } else {
      this.restService.post(this.path, this.receita).subscribe(() => {
        this.receita = null;
        this.router.navigate(["/receitas-list"]);
      }, error => {
        console.log('ERRO');
      });
    }
  }
}
