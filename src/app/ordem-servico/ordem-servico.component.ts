import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../helpers/base.component';
import { OrdemServico } from '../model/ordem-servico';
import { RestService } from '../rest.service';
import {Observable, of, OperatorFunction} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import { Cliente } from '../model/cliente';
import { Mercadoria } from '../model/mercadoria';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'app-ordem-servico',
  templateUrl: './ordem-servico.component.html',
  styleUrls: ['./ordem-servico.component.css']
})
export class OrdemServicoComponent extends BaseComponent<OrdemServico> implements OnInit {

  nomeCliente: string;
  nomeMercadoria: string;
  nomesClientes : string[] = [];
  nomesMercadorias : string[] = [];
  ordemServico = {} as OrdemServico;
  searching = false;
  searchFailed = false;

  constructor(restService: RestService,
    route: ActivatedRoute) {
      super(restService, route, '/perfect-car/ordem-servico');
     }

  ngOnInit(): void {
    this.restService.get('perfect-car/clientes/').subscribe((data) => {
      Object.values(data).forEach((cliente) => {
        cliente = cliente as Cliente;
        this.nomesClientes.push(cliente.nome);
      });
    });

    this.restService.get('perfect-car/mercadorias/').subscribe((data) => {
      Object.values(data).forEach((mercadoria) => {
        mercadoria = mercadoria as Mercadoria;
        this.nomesMercadorias.push(mercadoria.name);
      });
    });
  }

  addOrdemServico() {
    super.addEntity(this.ordemServico);
  }

  searchCliente: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map(term => term.length < 3 ? []
        : this.nomesClientes.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100))
    )

  searchMercadoria: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map(term => term.length < 3 ? []
        : this.nomesMercadorias.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100))
    )
}
