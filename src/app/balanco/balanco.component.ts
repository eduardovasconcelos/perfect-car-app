import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Balanco } from '../model/balanco';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-balanco',
  templateUrl: './balanco.component.html',
  styleUrls: ['./balanco.component.css']
})
export class BalancoComponent implements OnInit {

  path = '/perfect-car/balanco/';
  dataInicial : string;
  dataFinal : string;
  balanco: Balanco;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  getBalanco() {
    let param = '?dataInicial=' + this.dataInicial + '&dataFinal=' + this.dataFinal;

    this.http.get<Balanco>(this.path + param).subscribe((balanco) => {
      this.balanco = balanco;
    });
  }
}
