import {Component} from 'angular2/core';

@Component({
    selector: 'question-card',
    template: `
        <div class="mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">Question #10:</h2>
            </div>
            <div class="mdl-card__supporting-text">
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum
                </p>
                <ul class="mdl-menu">
                    <li class="mdl-menu__item">
                        <label for="switch-1">
                            <input type="checkbox"
                                   id="switch-1"
                                   class="mdl-switch__input"/>
                            <span class="mdl-switch__label">ullamco</span>
                        </label>
                    </li>
                    <li class="mdl-menu__item">
                        <label for="switch-1">
                            <input type="checkbox"
                                   id="switch-1"
                                   class="mdl-switch__input"
                                   checked/>
                            <span class="mdl-switch__label">ipsum</span>
                        </label>
                    </li>
                    <li class="mdl-menu__item">
                        <label for="switch-1">
                            <input type="checkbox"
                                   id="switch-1"
                                   class="mdl-switch__input"/>
                            <span class="mdl-switch__label">lorrem</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    `
})
export class QuestionCard {

}