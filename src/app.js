import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-core/polyfill';

import {
  Component, View, Attribute,
  provide
} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {
  Router, RouteConfig, RouteParams,
  LocationStrategy, HashLocationStrategy,
  ROUTER_PROVIDERS, ROUTER_DIRECTIVES, ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';

import { Greeter } from './services';
import { Hello, Ciao, Linker } from './components';

@Component({
  selector: 'hello-app',
  viewProviders: [Greeter]
})
@View({
  directives: [ROUTER_DIRECTIVES, Linker],
  template: `
    <ul>
      <li><a [routerLink]="['/Hello']">Hello</a></li>
      <li><a [routerLink]="['/Ciao', { name: 'ng2' }]">Ciao</a></li>
    </ul>
    <router-outlet></router-outlet>
    <linker name="GitHub" url="https://github.com/shuhei/babel-angular2-app"></linker>
  `
})
@RouteConfig([
  { path: '/', component: Hello, as: 'Hello' },
  { path: '/ciao/:name', component: Ciao, as: 'Ciao' }
])
class HelloApp {
}

bootstrap(HelloApp, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  // https://github.com/angular/angular/issues/4318
  provide(ROUTER_PRIMARY_COMPONENT, { useValue: HelloApp })
]);
