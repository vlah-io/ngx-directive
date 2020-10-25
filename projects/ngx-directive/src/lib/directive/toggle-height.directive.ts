import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[vlahioToggleHeight]'
})
export class ToggleHeightDirective implements AfterViewInit {
  @Input() container: HTMLDivElement;

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('window:resize')
  _onWindowResize(): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'display',
      this.container.offsetHeight < this.container.scrollHeight ? 'block' : 'none'
    );
  }

  ngAfterViewInit(): void {
    if (this.container.offsetHeight < this.container.scrollHeight) {
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'display',
        'block'
      );
    }
  }
}
