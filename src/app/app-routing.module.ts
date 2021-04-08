import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MercadoriasComponent } from './mercadorias/mercadorias.component';
import { DespesaComponent } from './despesa/despesa.component';
import { ReceitaComponent } from './receita/receita.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { MercadoriasListComponent } from './mercadorias-list/mercadorias-list.component';
import { DespesasListComponent } from './despesas-list/despesas-list.component';
import { ReceitasListComponent } from './receitas-list/receitas-list.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClienteComponent } from './cliente/cliente.component';
import { OrdemServicoComponent } from './ordem-servico/ordem-servico.component';
import { OrdemServicoListComponent } from './ordem-servico-list/ordem-servico-list.component';


const routes: Routes = [
  { path:"", redirectTo:"login", pathMatch:"full" },
  { path:"login", component : LoginComponent },
  { path:"home", component : HomeComponent },
  { path:"mercadorias", component : MercadoriasComponent },
  { path:"mercadorias-list", component : MercadoriasListComponent },
  { path:"despesas", component : DespesaComponent },
  { path:"despesas-list", component : DespesasListComponent },
  { path:"receitas", component : ReceitaComponent },
  { path:"receitas-list", component : ReceitasListComponent },
  { path:"usuarios", component : UsuariosComponent },
  { path:"usuarios-list", component : UsuariosListComponent },
  { path:"clientes", component : ClienteComponent },
  { path:"clientes-list", component : ClientesListComponent },
  { path:"ordem-servico", component : OrdemServicoComponent },
  { path:"ordem-servico-list", component : OrdemServicoListComponent },
  
];

@NgModule({ 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
