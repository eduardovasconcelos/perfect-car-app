import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Mercadoria } from '../model/mercadoria';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent implements OnInit {

  path = '/perfect-car/mercadorias/';  
  mercadoria = {} as Mercadoria ;
  isEdit: boolean = false;
  mensagem: boolean = false;

  constructor(private restService: RestService,
    private route: ActivatedRoute) {
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
         this.mensagem = true;
       }, error => {
         console.log('ERRO');
       });
     } else {
       this.restService.post(this.path, this.mercadoria).subscribe(() => {
        this.mensagem = true;
       }, error => {
         console.log('ERRO');
       });
     }

     this.mercadoria = {} as Mercadoria ;
   }
}
