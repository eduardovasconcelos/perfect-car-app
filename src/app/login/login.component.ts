import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username:string;
  password:string;
  error:boolean=false;
  mensagem:string;

  constructor(private restService: RestService, 
    private router: Router) {
    }
    
    ngOnInit(): void {
      
    }
    
    login() {        
      let parametro = {
        username: this.username,
        password: this.password
      }
      this.restService.post("/perfect-car/login", parametro).subscribe((usuario) => {                
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.router.navigate(["/home"]);    
      }, error => {
        this.error = true;
        this.mensagem = 'Login ou senha inválidos!';
      });
  }
}
