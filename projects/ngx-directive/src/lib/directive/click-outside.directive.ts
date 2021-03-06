import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[vlahioClickOutside]'
})
export class ClickOutsideDirective {
  @Input() ignoreIfClass: string | undefined;

  @Output() clickOutside: EventEmitter<boolean> = new EventEmitter();

  constructor(private elRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: any): void {
    if (
      !this.ignoreIfClass
      ||
      !targetElement.attributes.class
      ||
      targetElement.attributes.class.value.indexOf(this.ignoreIfClass) === -1
    ) {
      const clickedInside = this.elRef.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.clickOutside.emit(true);
      }
    }
  }
}
