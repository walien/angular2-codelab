import { Component, Input, AfterViewInit, ViewEncapsulation } from 'angular2/core';
import { ITechnology } from '../../services/technologies-store/technologies-store';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'theme-card',
    styleUrls: ['./styles/card.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [RouterLink],
    template: `
  <div class="mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">{{ theme.title }}</h2>
  </div>
  <div class="mdl-card__supporting-text">
    <img [src]="theme.logo" alt="" width="200" height="200">
    <p>{{ theme.description }}</p>
  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a [routerLink]="[ '/QuestionCard' ]" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Start test
    </a>
  </div>
  <div class="mdl-card__menu"></div>
</div>
`
})
export class ThemeCard implements AfterViewInit {
    @Input() theme:ITechnology;

    constructor() {
        this.theme = <ITechnology>{};
    }

    ngAfterViewInit() {
        console.log(this.theme);
    }

}
