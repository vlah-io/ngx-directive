import {Directive, HostBinding, Input, Renderer2} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Directive({
  selector: '[vlahioOnOff]'
})
export class OnOffDirective {
  @Input('vlahioOnOff') state: boolean;
  @Input() align: string;

  constructor(private sanitizer: DomSanitizer,
              private renderer: Renderer2) {
  }

  @HostBinding('innerHtml')
  get _innerHTML(): SafeHtml {
    let el = this.renderer.createElement('span') as HTMLSpanElement;
    this.renderer.setStyle(el, 'display', 'inline-block');
    this.renderer.setStyle(el, 'border-radius', '50%');
    this.renderer.setStyle(el, 'width', '0.7em');
    this.renderer.setStyle(el, 'height', '0.7em');
    let color = '#d9d9d9';
    if (this.state === true) {
      color = '#3dc37d';
    }
    this.renderer.setStyle(el, 'background-color', color);

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
