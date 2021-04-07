import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioHelper } from '../helpers/usuario.helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  nomeCompleto: string;
  isAdmin: boolean = false;

  constructor(private router: Router) { 
  }
  
  ngOnInit(): void {
    if (!UsuarioHelper.usuario) {
      this.router.navigate(['/login']);  
    }
  
    if (UsuarioHelper.usuarioAdmin) {
      this.isAdmin = true;
    }
    this.nomeCompleto = UsuarioHelper.usuarioNomeCompleto;
  }

  logout() {  
    localStorage.removeItem('usuario');
    localStorage.clear();
    this.isAdmin = false;
    this.router.navigate(['/login']);
  }

}
