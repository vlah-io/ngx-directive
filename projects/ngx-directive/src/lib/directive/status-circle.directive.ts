import {Directive, HostBinding, Input, Renderer2} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {RendererHelper} from '../helper/renderer.helper';

@Directive({
  selector: '[vlahioStatusCircle]'
})
export class StatusCircleDirective {
  @Input('vlahioStatusCircle') state: boolean | null | undefined;
  @Input() align: string | undefined;

  constructor(private sanitizer: DomSanitizer,
              private renderer: Renderer2) {
  }

  @HostBinding('innerHtml')
  get innerHTML(): SafeHtml {
    const el = this.renderer.createElement('span') as HTMLSpanElement;
    this.renderer.addClass(el, 'vlahio-status-circle');
    this.renderer.addClass(el, this.state ? 'on' : 'off');

    return this.sanitizer
      .bypassSecurityTrustHtml(
        RendererHelper.renderSpanOuterElement(
          this.renderer,
          this.align, el
        ).outerHTML
      );
  }
}
