import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Mercadoria } from '../model/mercadoria';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent implements OnInit {

  path = '/perfect-car/mercadorias/';  
  mercadoria = {} as Mercadoria ;
  isEdit: boolean = false;

  constructor(private restService: RestService,
    private route: ActivatedRoute,
    private router: Router) {
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
     if (this.isEdit) {
       this.restService.patch(this.path, this.mercadoria).subscribe(() => {
         this.mercadoria = null;
         this.router.navigate(["/mercadorias-list"]);
       }, error => {
         console.log('ERRO');
       });
     } else {
       this.restService.post(this.path, this.mercadoria).subscribe(() => {
         this.mercadoria = null;
         this.router.navigate(["/mercadorias-list"]);
       }, error => {
         console.log('ERRO');
       });
     }
   }
}
