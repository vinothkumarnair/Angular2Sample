import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
// Our main component
import { AppComponent } from './app.component';

// Our main routes
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { Title } from '@angular/platform-browser';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  APP_ROUTER_PROVIDERS,[Title]
])
.catch(err => console.error(err));

