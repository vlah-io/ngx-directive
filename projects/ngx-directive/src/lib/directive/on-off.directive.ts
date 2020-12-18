import {Directive, HostBinding, Input, Renderer2} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {RendererHelper} from '../helper/renderer.helper';

@Directive({
  selector: '[vlahioOnOff]'
})
export class OnOffDirective {
  @Input('vlahioOnOff') state: boolean | null | undefined;
  @Input() align: string | undefined;

  constructor(private sanitizer: DomSanitizer,
              private renderer: Renderer2) {
  }

  @HostBinding('innerHtml')
  get innerHTML(): SafeHtml {
    const el = this.renderer.createElement('span') as HTMLSpanElement;
    this.renderer.setStyle(el, 'display', 'inline-block');
    this.renderer.setStyle(el, 'border-radius', '50%');
    this.renderer.setStyle(el, 'width', '0.7em');
    this.renderer.setStyle(el, 'height', '0.7em');
    let color = '#d9d9d9';
    if (this.state === true) {
      color = '#3dc37d';
    }
    this.renderer.setStyle(el, 'background-color', color);

    return this.sanitizer
      .bypassSecurityTrustHtml(
        RendererHelper.renderSpanOuterElement(
          this.renderer,
          this.align, el
        ).outerHTML
      );
  }
}
