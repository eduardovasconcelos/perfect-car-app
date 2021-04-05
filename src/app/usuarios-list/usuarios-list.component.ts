import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  providers: [RestService],
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  path = "/perfect-car/usuarios/";
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  filter = new FormControl('');
  usuarios: Usuario[] = [];

  constructor(private restService: RestService,
    private router: Router) { 
    this.refreshUsuarios();
  }

  ngOnInit(): void {
    this.buscaUsuarios();
  }

  buscaUsuarios() {
    this.usuarios = [];
    this.restService.get(this.path).subscribe((data) => {
      if (data) {
        Object.values(data).forEach((usuario) => {
          this.usuarios.push(usuario)
        });        
      }
    }, error => {
    });
  }

  refreshUsuarios() {
    this.usuarios = this.usuarios
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  editaUsuario(usuario: Usuario) {
    this.router.navigate(['/usuarios', { id: usuario.id }]);
  }

  apagaUsuario(id: number) {
    this.restService.delete(this.path + id).subscribe((data) => {
      this.buscaUsuarios();
    });
  }
}
