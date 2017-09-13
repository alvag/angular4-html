import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info: any = {};
  equipo: any[] = [];

  constructor(public http: Http) {
    this.cargaInfo();
    this.carga_sobre_nosotros();
  }

  public cargaInfo() {
    this.http.get('assets/data/info.pagina.json')
      .subscribe(data => {
        // console.log(data.json());
        this.info = data.json();
      });
  }

  public carga_sobre_nosotros() {
    this.http.get('https://angular-4-html.firebaseio.com/equipo.json')
      .subscribe(data => {
        // console.log(data.json());
        this.equipo = data.json();
      });
  }

}
