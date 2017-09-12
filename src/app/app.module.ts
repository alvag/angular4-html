import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// HttpModule
import { HttpModule } from "@angular/http";

// Rutas
import { app_rounting } from "./app.routes";

// Servicios
import { InformacionService } from "./services/informacion.service";

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    app_rounting,
    HttpModule
  ],
  providers: [
    InformacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
