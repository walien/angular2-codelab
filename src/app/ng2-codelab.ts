import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from './components/home/home';
import {QuestionCard} from "./components/question-card/question-card";

@Component({
    selector: 'app',
    directives: [Home, ROUTER_DIRECTIVES],
    template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">

          <!-- Title -->
          <span class="mdl-layout-title">
            <a href="#" class="mdl-navigation__link">{{ title }}</a>
          </span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <!-- Navigation items. -->
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <a href="#" class="mdl-navigation__link">
          <span class="mdl-layout-title">{{ title }}</span>
        </a>
        <nav class="mdl-navigation">
          <a [routerLink]="['Home']">Home</a>
          <a [routerLink]="['QuestionCard']">Question Card</a>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
    `
})
@RouteConfig([
    {path: '/home', name: 'Home', component: Home, useAsDefault: true},
    {path: '/question-card', name: 'QuestionCard', component: QuestionCard}
])
export class Ng2CodelabApp {

    private title:string;

    constructor() {
        this.title = 'Angular 2 Quiz App';
    }

}
