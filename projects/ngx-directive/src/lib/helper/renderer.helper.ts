import {ObjectHelper} from './object.helper';
import {Renderer2} from '@angular/core';

export class RendererHelper {
  static renderSpanOuterElement(renderer: Renderer2,
                           align: string | undefined,
                           el: HTMLSpanElement
  ): HTMLSpanElement {
    if (ObjectHelper.isString(align)) {
      const spanElement = renderer.createElement('span') as HTMLSpanElement;
      renderer.setStyle(spanElement, 'text-align', align);
      renderer.setStyle(spanElement, 'display', 'block');
      renderer.appendChild(spanElement, el);
      return spanElement;
    }

    return el;
  }
}
