import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public _is: InformacionService,
              private router: Router) {

  }

  buscarProducto(termino: String) {
    this.router.navigate(['buscar', termino]);
  }

}
