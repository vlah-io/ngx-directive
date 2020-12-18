import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[vlahioToggleVisibilityOnResize]'
})
export class ToggleVisibilityOnResizeDirective implements AfterViewInit {
  @Input() container: HTMLDivElement | undefined;

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (this.container) {
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'display',
        this.container.offsetHeight < this.container.scrollHeight ? 'block' : 'none'
      );
    }
  }

  ngAfterViewInit(): void {
    if (this.container) {
      if (this.container.offsetHeight < this.container.scrollHeight) {
        this.renderer.setStyle(
          this.elRef.nativeElement,
          'display',
          'block'
        );
      }
    }
  }
}
