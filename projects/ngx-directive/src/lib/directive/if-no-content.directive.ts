import {Directive, HostBinding, Input} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeStyle} from '@angular/platform-browser';

@Directive({
  selector: '[vlahioIfNoContent]'
})
export class IfNoContentDirective {
  @Input() vlahioIfNoContent: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  @HostBinding('innerHtml')
  get _innerHTML(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.vlahioIfNoContent || '…');
  }

  @HostBinding('style')
  get _style(): SafeStyle {
    // this.renderer.setAttribute(this.elRef.nativeElement, 'class', str);
    // https://ngrefs.com/en/latest/styling/style-and-host-binding

    return this.sanitizer.bypassSecurityTrustStyle('color: #e27222;');
  }
}
