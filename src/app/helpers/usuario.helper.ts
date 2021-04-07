import { Injectable } from "@angular/core";
import { Usuario } from "../model/usuario";

@Injectable()
export class UsuarioHelper {

    static get usuarioAdmin() : boolean {
        let user = {} as Usuario;
        user = JSON.parse(localStorage.getItem('usuario'));
        return user ? user.isAdmin : null;
    }

    static get usuarioNomeCompleto(): string {
        let user = {} as Usuario;
        user = JSON.parse(localStorage.getItem('usuario'));
        return user ? user.name: '';
    }

    static get usuarioUsername(): string {
        let user = {} as Usuario;
        user = JSON.parse(localStorage.getItem('usuario'));
        return user ? user.username: '';
    }

    static deletaUsuario() {
        localStorage.removeItem('usuario');
    }

    static get usuario(): Usuario {
        let user = {} as Usuario;
        user = JSON.parse(localStorage.getItem('usuario'));
        return user;
    }

}