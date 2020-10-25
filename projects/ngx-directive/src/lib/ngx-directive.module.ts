import {NgModule} from '@angular/core';
import {ClickOutsideDirective} from './directive/click-outside.directive';
import {IfNoContentDirective} from './directive/if-no-content.directive';
import {OnOffDirective} from './directive/on-off.directive';
import {StatusCircleDirective} from './directive/status-circle.directive';
import {ToggleHeightDirective} from './directive/toggle-height.directive';
import {TrueFalseDirective} from './directive/true-false.directive';

@NgModule({
  imports: [],
  declarations: [
    ClickOutsideDirective,
    IfNoContentDirective,
    OnOffDirective,
    StatusCircleDirective,
    ToggleHeightDirective,
    TrueFalseDirective
  ],
  exports: [
    ClickOutsideDirective,
    IfNoContentDirective,
    OnOffDirective,
    StatusCircleDirective,
    ToggleHeightDirective,
    TrueFalseDirective
  ]
})
export class NgxDirectiveModule {
}
