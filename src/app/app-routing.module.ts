import { NgModule } from '@angular/core';
import { AboutComponent, PortafolioComponent, ProductComponent, SearchComponent } from './components/index.paginas';
import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ProductComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule( {
    imports: [
        RouterModule.forRoot( app_routes )
    ],
    exports: [
        RouterModule
    ]
} )
export class AppRoutingModule {}
