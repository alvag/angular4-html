import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, PortafolioComponent, ProductComponent } from './components/index.paginas';

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto', component: ProductComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_rounting = RouterModule.forRoot(app_routes);
