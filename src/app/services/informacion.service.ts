import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InformacionService {

    info: any = {};
    cargando = false;
    equipo: any[] = [];

    constructor( public http: HttpClient ) {
        this.cargaInfo();
        this.carga_sobre_nosotros();
    }

    public cargaInfo() {
        this.http.get( 'assets/data/info.pagina.json' )
        .subscribe( ( response: any ) => {
            this.cargando = true;
            this.info = response;
        } );
    }

    public carga_sobre_nosotros() {
        this.http.get( 'https://angular-4-html.firebaseio.com/equipo.json' )
        .subscribe( ( response: any ) => {
            this.equipo = response;
        } );
    }

}
