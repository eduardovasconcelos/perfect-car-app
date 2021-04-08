import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get(url: string) {
    url = this.apiUrl + url;
    return this.http.get(url);
  }

  post(url: string, parametros: any) {
    url = this.apiUrl + url;
    return this.http.post(url, parametros);
  }

  delete(url: string) {
    url = this.apiUrl + url;
    return this.http.delete(url);
  }

  
  patch(url: string, parametros: any) {
    url = this.apiUrl + url;
    return this.http.patch(url, parametros);
  }

}
