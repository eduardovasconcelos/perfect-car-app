import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  path = '/perfect-car/usuarios/';  
  usuario = {} as Usuario;
  isEdit: boolean = false;
  mensagem: boolean;

  constructor(private restService: RestService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mensagem = false;
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.findUsuario(id);
      this.isEdit = true;
    }
  }

  findUsuario(id: string) {
   this.restService.get(this.path + id).subscribe((data) => {
     console.log(data);
      this.usuario = data as Usuario;
   });
  }

  addUsuario() {
    if (this.isEdit) {
      this.restService.patch(this.path, this.usuario).subscribe(() => {
        this.mensagem = true;
      }, error => {
        console.log('ERRO');
      });
    } else {
      this.restService.post(this.path, this.usuario).subscribe(() => {
        this.mensagem = true;
      }, error => {
        console.log('ERRO');
      });
    }

    this.usuario = {} as Usuario;
  }
}
