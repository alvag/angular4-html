import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http/';
import { InformacionService } from './services/informacion.service';
import { ProductosService } from './services/productos.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule( {
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PortafolioComponent,
        AboutComponent,
        ProductComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        InformacionService,
        ProductosService
    ],
    bootstrap: [ AppComponent ]
} )
export class AppModule {}
