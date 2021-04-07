import { Injectable, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestService } from "../rest.service";

@Injectable()
export class BaseComponent<T> implements OnInit {

    restService: RestService;
    route: ActivatedRoute;
    path: string;
    isEdit : boolean = false;
    mensagem: boolean = false;

    constructor(restService: RestService,
        route: ActivatedRoute,
        path: string) { 
            this.restService = restService;
            this.route = route;
            this.path = path;
        }

    ngOnInit(): void {
        this.mensagem = false;
    }

    buscaEntities() : any {
        this.restService.get(this.path).subscribe((data) => {      
            return data;
        }, error => {
            return error;
        });
      }

    addEntity(entity: T) {
        if (this.isEdit) {
          this.restService.patch(this.path, entity).subscribe(() => {
            this.mensagem = true;
          }, error => {
            console.log('ERRO');
          });
        } else {
          this.restService.post(this.path, entity).subscribe(() => {
            this.mensagem = true;
          }, error => {
            console.log('ERRO');
          });
        }
        entity = {} as T ;
    }
}