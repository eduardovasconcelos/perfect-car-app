import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../helpers/base.component';
import { Usuario } from '../model/usuario';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent extends BaseComponent<Usuario> implements OnInit {

  usuario = {} as Usuario;

  constructor(restService: RestService,
    route: ActivatedRoute) { 
      super(restService, route, '/perfect-car/usuarios/');
    }

  ngOnInit(): void {
    super.ngOnInit();
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.findUsuario(id);
      this.isEdit = true;
    }
  }

  findUsuario(id: string) {
   this.restService.get(this.path + id).subscribe((data) => {
      this.usuario = data as Usuario;
   });
  }

  addUsuario() {
    super.addEntity(this.usuario);
  }
}
