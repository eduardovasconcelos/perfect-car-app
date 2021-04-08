import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthInterceptor } from './helpers/auth.interceptor';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClienteComponent } from './cliente/cliente.component';
import { OrdemServicoComponent } from './ordem-servico/ordem-servico.component';
import { OrdemServicoListComponent } from './ordem-servico-list/ordem-servico-list.component';

registerLocaleData(localePt, 'pt');

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
    ReceitasListComponent,
    ClientesListComponent,
    ClienteComponent,
    OrdemServicoComponent,
    OrdemServicoListComponent
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
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, 
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
