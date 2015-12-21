import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-core/polyfill';

import {
  Component, View, Attribute,
  provide
} from 'angular2/core';

import {
  Router, RouteConfig, RouteParams,
  LocationStrategy, HashLocationStrategy,
  ROUTER_PROVIDERS, ROUTER_DIRECTIVES, ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';

import { Greeter } from './services';

@Component({
  selector: 'hello'
})
@View({
  templateUrl: 'views/message.html'
})
export class Hello {
  constructor(greeter: Greeter) {
    this.message = greeter.say('hello', 'Angular 2');
  }
}

@Component({
  selector: 'ciao'
})
@View({
   templateUrl: 'views/message.html'
})
export class Ciao {
  constructor(greeter: Greeter, routeParams: RouteParams) {
    this.message = greeter.say('ciao', routeParams.get('name'));
  }
}

@Component({
  selector: 'linker'
})
@View({
  template: '<p><a [href]="url" [title]="name">{{ name }}</a></p>'
})
export class Linker {
  constructor(greeter: Greeter, @Attribute('name') name, @Attribute('url') url) {
    this.name = name;
    this.url = url;
  }
}
