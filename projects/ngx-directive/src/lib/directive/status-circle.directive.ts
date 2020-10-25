import {Directive, HostBinding, Input, Renderer2} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Directive({
  selector: '[vlahioStatusCircle]'
})
export class StatusCircleDirective {
  @Input('vlahioStatusCircle') state: boolean;
  @Input() align: string;

  constructor(private sanitizer: DomSanitizer,
              private renderer: Renderer2) {
  }

  @HostBinding('innerHtml')
  get _innerHTML(): SafeHtml {
    let el = this.renderer.createElement('span') as HTMLSpanElement;
    this.renderer.addClass(el, 'vlahio-status-circle');
    this.renderer.addClass(el, this.state ? 'on' : 'off');

    if (Object.prototype.toString.call(this.align) === '[object String]') {
      const spanElement = this.renderer.createElement('span') as HTMLSpanElement;
      this.renderer.setStyle(spanElement, 'text-align', this.align);
      this.renderer.setStyle(spanElement, 'display', 'block');
      this.renderer.appendChild(spanElement, el);
      el = spanElement;
    }

    return this.sanitizer.bypassSecurityTrustHtml(el.outerHTML);
  }
}
