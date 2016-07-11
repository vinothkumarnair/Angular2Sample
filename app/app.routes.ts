import { provideRouter, RouterConfig } from '@angular/router';

import { LoginComponent } from './home/login.component';
import { ProductRoutes }        from './products/product.routes';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  ...ProductRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
