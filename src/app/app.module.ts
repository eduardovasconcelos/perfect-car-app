import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MercadoriasComponent } from './mercadorias/mercadorias.component';
import { DespesaComponent } from './despesa/despesa.component';
import { ReceitaComponent } from './receita/receita.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MercadoriasListComponent } from './mercadorias-list/mercadorias-list.component';
import { DespesasListComponent } from './despesas-list/despesas-list.component';
import { ReceitasListComponent } from './receitas-list/receitas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MercadoriasComponent,
    DespesaComponent,
    ReceitaComponent,
    UsuariosComponent,
    UsuariosListComponent,
    MercadoriasListComponent,
    DespesasListComponent,
    ReceitasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule
  ],
  providers: [    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
