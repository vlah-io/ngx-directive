import {Directive, HostBinding, Input, Renderer2} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Directive({
  selector: '[vlahioTrueFalse]'
})
export class TrueFalseDirective {
  @Input('vlahioTrueFalse') state: boolean;
  @Input() align: string;

  constructor(private sanitizer: DomSanitizer,
              private renderer: Renderer2) {
  }

  @HostBinding('innerHtml')
  get _innerHTML(): SafeHtml {
    if (this.state !== true) {
      return null;
    }

    let el = this.renderer.createElement('span') as HTMLSpanElement;
    this.renderer.addClass(el, 'vlahio-check-container');
    let spanElement = this.renderer.createElement('span') as HTMLSpanElement;
    this.renderer.addClass(spanElement, 'vlahio-check-icon');
    this.renderer.appendChild(el, spanElement);

    if (Object.prototype.toString.call(this.align) === '[object String]') {
      spanElement = this.renderer.createElement('span') as HTMLSpanElement;
      this.renderer.setStyle(spanElement, 'text-align', this.align);
      this.renderer.setStyle(spanElement, 'display', 'block');
      this.renderer.appendChild(spanElement, el);
      el = spanElement;
    }

    return this.sanitizer.bypassSecurityTrustHtml(el.outerHTML);
  }
}
