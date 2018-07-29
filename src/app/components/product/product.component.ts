import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';

@Component( {
    selector: 'app-product',
    templateUrl: './product.component.html'
} )
export class ProductComponent {

    producto: any = undefined;
    productId: String = undefined;
    nextProduct: string = undefined;

    constructor( private route: ActivatedRoute,
                 private _ps: ProductosService ) {

        route.params.subscribe( parametros => {
            // console.log(parametros['id']);
            this.productId = parametros[ 'id' ];
            _ps.cargarProducto( this.productId )
            .subscribe( res => {
                this.producto = res;

                _ps.productos.forEach( prod => {
                    if ( prod.cod === this.productId ) {
                        // console.log(prod.cod);
                        const index = _ps.productos.indexOf( prod );
                        // console.log(index);
                        // console.log(_ps.productos.length);
                        if ( index + 1 < _ps.productos.length ) {
                            this.nextProduct = _ps.productos[ index + 1 ].cod;
                            // console.log(this.nextProduct);
                        }
                    }
                } );

            } );
            window.scrollTo( 0, 0 );
        } );
    }

}
