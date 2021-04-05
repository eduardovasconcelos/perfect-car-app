import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Despesa } from '../model/despesa';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

  path = '/perfect-car/despesas/';  
  despesa = {} as Despesa ;
  isEdit: boolean = false;

  constructor(private restService: RestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
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
     if (this.isEdit) {
       this.restService.patch(this.path, this.despesa).subscribe(() => {
         this.despesa = null;
         this.router.navigate(["/despesas-list"]);
       }, error => {
         console.log('ERRO');
       });
     } else {
       this.restService.post(this.path, this.despesa).subscribe(() => {
         this.despesa = null;
         this.router.navigate(["/despesas-list"]);
       }, error => {
         console.log('ERRO');
       });
     }
   }

}