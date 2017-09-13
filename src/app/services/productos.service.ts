import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos: any[] = [];
  productos_filtrados: any[] = [];
  cargando: Boolean = true;

  constructor(private http: Http) {
    this.cargarProductos();
  }

  public cargarProductos() {
    this.cargando = true;

    const promesa = new Promise((resolve, reject) => {
      // if (this.productos.length === 0) {
      this.http.get('https://angular-4-html.firebaseio.com/productos_idx.json')
        .subscribe(res => {
          // console.log(res.json());
          this.productos = res.json();
          this.cargando = false;
          resolve();
        });
      // }
    });

    return promesa;
  }

  public cargarProducto(cod: String) {
    return this.http.get(`https://angular-4-html.firebaseio.com/productos/${cod}.json`);
  }

  public buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
        // console.log(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    this.productos_filtrados = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod => {
      if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.productos_filtrados.push(prod);
      }
    });
    // console.log(this.productos_filtrados);
  }

}
